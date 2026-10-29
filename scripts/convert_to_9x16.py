import os
import subprocess
from pathlib import Path

BASE = Path(r"G:\Meu Drive\1. WEBSITES\sestepa-design")
SLUG = "portals-nous"

# Video 16:9 aprovado gerado pela Magnific AI
src_16x9 = BASE / "videos" / SLUG / "renders" / f"{SLUG}-2-magnific-living-motion.mp4"
if not src_16x9.is_file():
    src_16x9 = BASE / "videos" / SLUG / "aprovados" / f"{SLUG}-2-16x9-05s-magnific-living-motion-mallorca-sestepa-garden-design.mp4"

out_render = BASE / "videos" / SLUG / "renders" / f"{SLUG}-2-magnific-living-motion-9x16.mp4"
out_aprovado = BASE / "videos" / SLUG / "aprovados" / f"{SLUG}-2-9x16-05s-magnific-living-motion-mallorca-sestepa-garden-design.mp4"

print(f"[*] Origem 16:9 (Magnific Real): {src_16x9}")
print(f"[*] Destino Render: {out_render}")
print(f"[*] Destino Aprovado: {out_aprovado}")

# Protocolo Template 2 / Drone-Flow: scale to 1080:1920 force increase, crop 1080:1920
# com qualidade de producao CRF 14, 30 fps, YUV420p
cmd = [
    "ffmpeg", "-y",
    "-i", str(src_16x9),
    "-vf", "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920",
    "-c:v", "libx264",
    "-crf", "14",
    "-preset", "slow",
    "-pix_fmt", "yuv420p",
    "-r", "30",
    "-an",
    str(out_render)
]

print("[*] Executando conversao FFmpeg para 9:16...")
res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode != 0:
    print(f"[!] Erro no FFmpeg: {res.stderr}")
    exit(res.returncode)

# Copiar para aprovados
import shutil
shutil.copy2(out_render, out_aprovado)

sz_mb = out_aprovado.stat().st_size / (1024 * 1024)
print(f"[+] Conversao concluida com sucesso!")
print(f"[+] Arquivo 9:16 gerado: {out_aprovado} ({sz_mb:.2f} MB)")
