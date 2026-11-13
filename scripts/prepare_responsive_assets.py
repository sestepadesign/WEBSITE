import json
import re
from pathlib import Path
from PIL import Image, ImageOps

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    if hasattr(pillow_heif, "register_avif_opener"):
        pillow_heif.register_avif_opener()
except ImportError:
    pass

ROOT = Path(__file__).resolve().parent.parent
PUBLIC_DIR = ROOT / "public"


def parse_gallery_paths(ts_content: str) -> list[str]:
    results = []
    pattern = re.compile(r"(?:src:\s*'([^']+)'|src:\s*galleryPath\('([^']+)'\))")
    for m in pattern.finditer(ts_content):
        if m.group(1):
            results.append(m.group(1))
        elif m.group(2):
            results.append(f"/gallery/{m.group(2)}")
    return results


def parse_project_paths(ts_content: str) -> list[str]:
    pattern = re.compile(r"['\"](\/portfolio\/[^'\"]+\.(?:webp|jpg|jpeg|png|avif))['\"]", re.IGNORECASE)
    return sorted(set(pattern.findall(ts_content)))


def parse_project_covers(ts_content: str) -> list[tuple[str, str]]:
    pattern = re.compile(r'slug:\s*["\']([^"\']+)["\'][\s\S]*?cover:\s*["\']([^"\']+)["\']')
    return pattern.findall(ts_content)


def main():
    dimensions = {}

    # 1. Mobile hero LCP variant (<= 120 KB, 828px wide)
    hero_src = PUBLIC_DIR / "portfolio/sant-llorenc/images/garden-design-mallorca-sant-llorenc-hero-cover-muhlenbergia-sestepa-design.webp"
    hero_mobile_dst = PUBLIC_DIR / "portfolio/sant-llorenc/images/garden-design-mallorca-sant-llorenc-hero-cover-muhlenbergia-sestepa-design-mobile.webp"
    with Image.open(hero_src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        w, h = im.size
        if w > 828:
            im = im.resize((828, int(h * (828 / w))), Image.Resampling.LANCZOS)
        im.save(hero_mobile_dst, "WEBP", quality=74, method=6)
    print(f"[+] Hero mobile LCP: {hero_mobile_dst.stat().st_size / 1024:.1f} KB")

    # 2. Gallery 480px WebP thumbnails + dimensions
    gallery_ts = (ROOT / "src/data/gallery-images.ts").read_text(encoding="utf-8")
    gallery_srcs = parse_gallery_paths(gallery_ts)
    gallery_thumb_dir = PUBLIC_DIR / "thumbs/gallery"
    gallery_thumb_dir.mkdir(parents=True, exist_ok=True)

    thumb_total_bytes = 0
    for idx, src_url in enumerate(gallery_srcs, 1):
        abs_path = PUBLIC_DIR / src_url.lstrip("/")
        try:
            with Image.open(abs_path) as im:
                im = ImageOps.exif_transpose(im)
                orig_w, orig_h = im.size
                rgb = im.convert("RGB")
                if orig_w > 480:
                    new_h = int(orig_h * (480 / orig_w))
                    thumb_im = rgb.resize((480, new_h), Image.Resampling.LANCZOS)
                else:
                    thumb_im = rgb
                    new_h = orig_h
                tw, th = thumb_im.size
                thumb_name = f"thumb-{idx:02d}.webp"
                thumb_rel = f"/thumbs/gallery/{thumb_name}"
                thumb_abs = gallery_thumb_dir / thumb_name
                thumb_im.save(thumb_abs, "WEBP", quality=78, method=5)
                thumb_total_bytes += thumb_abs.stat().st_size
                dimensions[src_url] = {
                    "w": orig_w,
                    "h": orig_h,
                    "thumb": thumb_rel,
                    "tw": tw,
                    "th": th,
                }
        except Exception as e:
            print(f"[!] Failed gallery image {src_url}: {e}")

    print(f"[+] Gallery thumbnails ({len(gallery_srcs)}): {thumb_total_bytes / (1024 * 1024):.2f} MB total")

    # 3. Project cards (700x525 4:3)
    projects_ts = (ROOT / "src/data/projects.ts").read_text(encoding="utf-8")
    covers = parse_project_covers(projects_ts)
    card_dir = PUBLIC_DIR / "thumbs/cards"
    card_dir.mkdir(parents=True, exist_ok=True)

    for slug, cover in covers:
        abs_cover = PUBLIC_DIR / cover.lstrip("/")
        card_rel = f"/thumbs/cards/{slug}-card.webp"
        card_abs = card_dir / f"{slug}-card.webp"
        try:
            with Image.open(abs_cover) as im:
                im = ImageOps.exif_transpose(im).convert("RGB")
                w, h = im.size
                target_ratio = 700 / 525
                current_ratio = w / h
                if current_ratio > target_ratio:
                    new_w = int(h * target_ratio)
                    left = (w - new_w) // 2
                    im = im.crop((left, 0, left + new_w, h))
                else:
                    new_h = int(w / target_ratio)
                    top = (h - new_h) // 2
                    im = im.crop((0, top, w, top + new_h))
                im = im.resize((700, 525), Image.Resampling.LANCZOS)
                im.save(card_abs, "WEBP", quality=80, method=5)
                dimensions.setdefault(cover, {})["card"] = card_rel
        except Exception as e:
            print(f"[!] Failed card for {slug}: {e}")

    print(f"[+] Generated {len(covers)} project card thumbnails in /thumbs/cards/")

    # 4. Recompress oversized WebPs (> 450 KB) in-place (preserving exact URLs) & record dimensions
    all_project_imgs = parse_project_paths(projects_ts)
    recompressed_count = 0
    saved_bytes = 0
    for img_url in all_project_imgs:
        abs_path = PUBLIC_DIR / img_url.lstrip("/")
        if not abs_path.exists():
            continue
        try:
            orig_size = abs_path.stat().st_size
            with Image.open(abs_path) as im:
                im = ImageOps.exif_transpose(im)
                w, h = im.size
                if img_url.lower().endswith(".webp") and orig_size > 450 * 1024:
                    rgb = im.convert("RGB")
                    if w > 1920:
                        nh = int(h * (1920 / w))
                        rgb = rgb.resize((1920, nh), Image.Resampling.LANCZOS)
                        nw = 1920
                    else:
                        nw, nh = w, h
                    tmp_path = abs_path.with_suffix(".tmp.webp")
                    rgb.save(tmp_path, "WEBP", quality=80, method=6)
                    new_size = tmp_path.stat().st_size
                    if new_size < orig_size * 0.85:
                        tmp_path.replace(abs_path)
                        saved_bytes += orig_size - new_size
                        recompressed_count += 1
                        dimensions.setdefault(img_url, {}).update({"w": nw, "h": nh})
                        continue
                    else:
                        tmp_path.unlink(missing_ok=True)
                dimensions.setdefault(img_url, {}).setdefault("w", w)
                dimensions[img_url].setdefault("h", h)
        except Exception:
            pass

    print(f"[+] Recompressed {recompressed_count} oversized WebPs in-place (saved {saved_bytes / (1024 * 1024):.2f} MB)")

    # Record key static/OG images
    for extra_url in [
        "/videos/sant_llorenc_poster.webp",
        "/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.webp",
        "/portfolio/sant-llorenc/images/garden-design-mallorca-sant-llorenc-hero-cover-muhlenbergia-sestepa-design.webp",
    ]:
        p = PUBLIC_DIR / extra_url.lstrip("/")
        if p.exists():
            try:
                with Image.open(p) as im:
                    dimensions.setdefault(extra_url, {}).update({"w": im.width, "h": im.height})
            except Exception:
                pass

    out_json = ROOT / "src/data/image-dimensions.json"
    out_json.write_text(json.dumps(dimensions, indent=2) + "\n", encoding="utf-8")
    print(f"[+] Wrote src/data/image-dimensions.json ({len(dimensions)} entries)")


if __name__ == "__main__":
    main()
