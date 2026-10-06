import hashlib
import os
import shutil
import subprocess
import sys
from pathlib import Path

SOURCE_DIR = Path(__file__).resolve().parent.parent
LOCALAPPDATA = Path(os.environ.get("LOCALAPPDATA", os.environ.get("TEMP", r"C:\Temp")))
DEST_DIR = LOCALAPPDATA / "SestepaPreview" / "codigo"
STATE_DIR = DEST_DIR / ".preview-state"
LOCK_HASH = STATE_DIR / "package-lock.sha256"

IGNORE_DIRS = {
    ".git",
    ".astro",
    ".giscus",
    "dist",
    "node_modules",
    "_backups",
    "images tratadas com magnific",
}
IGNORE_SUFFIXES = {
    ".zip",
    ".7z",
    ".rar",
    ".psd",
    ".ai",
}
IGNORE_NAMES = {
    ".DS_Store",
}
IGNORE_RELATIVE_PATHS = {
    Path("public/api/docs.html"),
}


def should_ignore(path: Path) -> bool:
    try:
        rel = path.relative_to(SOURCE_DIR)
        if rel in IGNORE_RELATIVE_PATHS:
            return True
    except ValueError:
        pass

    name = path.name
    lower_name = name.lower()
    parts_lower = {part.lower() for part in path.parts}

    if name in IGNORE_NAMES:
        return True
    if lower_name.startswith("_clpreview") and lower_name.endswith(".html"):
        return True
    if lower_name.endswith(tuple(IGNORE_SUFFIXES)):
        return True
    if any(part in IGNORE_DIRS for part in parts_lower):
        return True
    if name.endswith(".bak") or ".bak-" in name:
        return True
    return False


def file_hash(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def package_lock_changed() -> bool:
    lock = SOURCE_DIR / "package-lock.json"
    if not lock.exists():
        return True
    current = file_hash(lock)
    previous = LOCK_HASH.read_text(encoding="utf-8").strip() if LOCK_HASH.exists() else ""
    return current != previous or not (DEST_DIR / "node_modules").exists()


def save_package_lock_hash() -> None:
    lock = SOURCE_DIR / "package-lock.json"
    if lock.exists():
        STATE_DIR.mkdir(parents=True, exist_ok=True)
        LOCK_HASH.write_text(file_hash(lock), encoding="utf-8")


def copy_if_needed(src: Path, dst: Path) -> bool:
    if dst.exists():
        s = src.stat()
        d = dst.stat()
        if s.st_size == d.st_size and int(s.st_mtime) == int(d.st_mtime):
            return False
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    return True


def sync_source() -> tuple[int, int, int]:
    DEST_DIR.mkdir(parents=True, exist_ok=True)
    copied = 0
    skipped = 0
    expected: set[Path] = set()

    for root, dirs, files in os.walk(SOURCE_DIR):
        root_path = Path(root)
        dirs[:] = [d for d in dirs if not should_ignore(root_path / d)]

        for filename in files:
            src = root_path / filename
            rel = src.relative_to(SOURCE_DIR)
            if should_ignore(src):
                skipped += 1
                continue
            dst = DEST_DIR / rel
            expected.add(dst)
            if copy_if_needed(src, dst):
                copied += 1

    removed = 0
    for root, dirs, files in os.walk(DEST_DIR, topdown=False):
        root_path = Path(root)
        if "node_modules" in root_path.parts or ".preview-state" in root_path.parts:
            continue
        for filename in files:
            dst = root_path / filename
            if dst not in expected:
                dst.unlink(missing_ok=True)
                removed += 1
        for dirname in dirs:
            d = root_path / dirname
            if d.name in {"node_modules", ".preview-state"}:
                continue
            try:
                d.rmdir()
            except OSError:
                pass

    return copied, skipped, removed


def run(cmd: list[str], cwd: Path) -> None:
    print("> " + " ".join(cmd))
    subprocess.run(cmd, cwd=cwd, check=True, shell=True)


def main() -> int:
    mode = "build" if any(arg in {"build", "--build"} for arg in sys.argv[1:]) else "dev"

    print(f"Source directory: {SOURCE_DIR}")
    print(f"Reusable preview mirror: {DEST_DIR}")

    if not (SOURCE_DIR / "package.json").exists():
        print("Error: package.json not found. Run from the S'Estepa Design codigo project.")
        return 1

    print("\n[1/3] Syncing changed files to the local mirror...")
    copied, skipped, removed = sync_source()
    print(f"Copied/updated: {copied} files | removed stale: {removed} | skipped raw/temp: {skipped}")

    print("\n[2/3] Checking dependencies...")
    if package_lock_changed():
        print("package-lock.json changed or node_modules missing; installing dependencies in the local mirror.")
        run(["npm", "install"], DEST_DIR)
        save_package_lock_hash()
    else:
        print("Dependencies unchanged; reusing node_modules.")

    if mode == "build":
        print("\n[3/3] Running Astro build in the local mirror.")
        run(["npm", "run", "build"], DEST_DIR)
        print("\nBuild finished. The local mirror is preserved for the next preview.")
        return 0

    print("\n[3/3] Starting Astro dev server.")
    print("Local URL: http://localhost:4321/")
    print("Press Ctrl+C to stop. The local mirror is preserved for the next preview.\n")
    try:
        run(["npm", "run", "dev"], DEST_DIR)
    except KeyboardInterrupt:
        print("\nPreview stopped.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
