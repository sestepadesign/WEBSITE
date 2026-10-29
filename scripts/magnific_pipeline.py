import os
import sys
import json
import time
import base64
import shutil
import argparse
import urllib.request
import urllib.error
from pathlib import Path
from PIL import Image
import io

ENV_PATH = Path(r"G:\Meu Drive\1. WEBSITES\sestepa-design\.env")
G_DRIVE_BASE = Path(r"G:\Meu Drive\1. WEBSITES\sestepa-design")

def move_rejected_path_cut(slug: str):
    aprovados_dir = G_DRIVE_BASE / "videos" / slug / "aprovados"
    renders_dir = G_DRIVE_BASE / "videos" / slug / "renders"
    old_file = aprovados_dir / f"{slug}-2-9x16-05s-magnific-living-motion-mallorca-sestepa-garden-design.mp4"
    dest_file = renders_dir / f"{slug}-2-9x16-corte-caminho-renders.mp4"
    if old_file.is_file():
        print(f"[*] Movendo corte anterior do caminho para renders: {old_file.name} -> {dest_file.name}")
        try:
            shutil.move(str(old_file), str(dest_file))
            print("[+] Arquivo movido com sucesso para renders.")
        except Exception as e:
            print(f"[-] Aviso ao mover arquivo: {e}")

def probe_endpoints():
    api_key = get_api_key()
    ep = "https://api.freepik.com/v1/ai/video-upscaler"
    
    # Test 1: with string url
    payload = {"video": "https://example.com/video.mp4"}
    req = urllib.request.Request(
        ep,
        headers={"x-freepik-api-key": api_key, "Content-Type": "application/json"},
        data=json.dumps(payload).encode("utf-8"),
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            print(f"[+] {ep} with url -> Status {r.status}: {r.read().decode('utf-8')[:200]}")
    except urllib.error.HTTPError as e:
        print(f"[-] {ep} with url -> HTTP {e.code}: {e.read().decode('utf-8')[:200]}")
    except Exception as e:
        print(f"[-] {ep} with url -> Error: {e}")

    # Test 2: base64 dummy
    payload_b64 = {"video": "data:video/mp4;base64,AAAA"}
    req2 = urllib.request.Request(
        ep,
        headers={"x-freepik-api-key": api_key, "Content-Type": "application/json"},
        data=json.dumps(payload_b64).encode("utf-8"),
        method="POST"
    )
    try:
        with urllib.request.urlopen(req2, timeout=10) as r:
            print(f"[+] {ep} with base64 -> Status {r.status}: {r.read().decode('utf-8')[:200]}")
    except urllib.error.HTTPError as e:
        print(f"[-] {ep} with base64 -> HTTP {e.code}: {e.read().decode('utf-8')[:200]}")
    except Exception as e:
        print(f"[-] {ep} with base64 -> Error: {e}")

def get_api_key():
    if not ENV_PATH.is_file():
        print(f"[!] Erro: Arquivo .env nao encontrado em {ENV_PATH}")
        sys.exit(1)
    with open(ENV_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line.startswith("MAGNIFIC_API_KEY="):
                return line.split("=", 1)[1].strip()
    print("[!] Erro: MAGNIFIC_API_KEY nao encontrada no .env")
    sys.exit(1)

def encode_image(image_path: Path, ratio: str = "9:16", max_dimension=1920):
    print(f"[*] Carregando imagem fonte: {image_path}")
    with Image.open(image_path) as img:
        img = img.convert("RGB")
        w, h = img.size
        print(f"[*] Dimensoes originais: {w}x{h} px (Aspect ratio: {w/h:.3f})")
        
        if ratio == "9:16":
            target_w = int(h * (9 / 16))
            left = (w - target_w) // 2
            img = img.crop((left, 0, left + target_w, h))
            w, h = img.size
            print(f"[*] Ajustado para aspect ratio 9:16 vertical: {w}x{h} px (Aspect ratio: {w/h:.3f})")
        elif ratio == "16:9":
            if w / h > 1.9:
                target_w = int(h * (16 / 9))
                left = (w - target_w) // 2
                img = img.crop((left, 0, left + target_w, h))
                w, h = img.size
                print(f"[*] Ajustado para aspect ratio 16:9 horizontal: {w}x{h} px (Aspect ratio: {w/h:.3f})")
        
        if max(w, h) > max_dimension:
            scale = max_dimension / max(w, h)
            new_w, new_h = int(w * scale), int(h * scale)
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            print(f"[*] Redimensionado para: {new_w}x{new_h} px")
        
        buffer = io.BytesIO()
        img.save(buffer, format="JPEG", quality=92)
        b64_str = base64.b64encode(buffer.getvalue()).decode("utf-8")
        return f"data:image/jpeg;base64,{b64_str}"

def send_request(url, headers, payload=None, method="POST"):
    data_bytes = json.dumps(payload).encode("utf-8") if payload else None
    req = urllib.request.Request(url, data=data_bytes, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            raw = resp.read().decode("utf-8")
            return resp.status, json.loads(raw)
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8") if e.fp else ""
        print(f"[-] HTTPError {e.code}: {e.reason} -> {err_body}")
        try:
            return e.code, json.loads(err_body)
        except Exception:
            return e.code, {"error": err_body}
    except Exception as e:
        print(f"[-] Erro de conexao: {e}")
        return 500, {"error": str(e)}

def download_file(url, dest_path: Path):
    print(f"[*] Baixando video gerado de: {url}")
    print(f"[*] Destino: {dest_path}")
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": "SestepaBot/1.0"})
    with urllib.request.urlopen(req, timeout=120) as resp, open(dest_path, "wb") as out:
        out.write(resp.read())
    file_size_mb = dest_path.stat().st_size / (1024 * 1024)
    print(f"[+] Download concluido com sucesso: {dest_path.name} ({file_size_mb:.2f} MB)")

def run_animation(image_path: Path, slug: str, prompt: str, duration: int = 5, ratio: str = "9:16"):
    api_key = get_api_key()
    print(f"[*] Iniciando esteira Magnific AI para o projeto '{slug}' (Ratio: {ratio})...")
    
    # Preservar versao 16:9 anterior se existir em renders
    raw_16x9 = G_DRIVE_BASE / "videos" / slug / "renders" / f"{slug}-2-magnific-living-motion.mp4"
    aprovado_16x9 = G_DRIVE_BASE / "videos" / slug / "aprovados" / f"{slug}-2-16x9-05s-magnific-living-motion-mallorca-sestepa-garden-design.mp4"
    if raw_16x9.is_file() and not aprovado_16x9.is_file():
        shutil.copy2(raw_16x9, aprovado_16x9)
        print(f"[+] Versao 16:9 preservada em: {aprovado_16x9.name}")
    
    image_b64 = encode_image(image_path, ratio=ratio)
    
    # Modelos e endpoints candidatos suportados pela API
    candidate_endpoints = [
        ("https://api.freepik.com/v1/ai/image-to-video/runway-4-5", "x-freepik-api-key"),
        ("https://api.magnific.com/v1/ai/image-to-video/runway-4-5", "x-magnific-api-key"),
        ("https://api.freepik.com/v1/ai/image-to-video/kling", "x-freepik-api-key"),
        ("https://api.magnific.com/v1/ai/image-to-video/kling", "x-magnific-api-key"),
        ("https://api.freepik.com/v1/ai/image-to-video/minimax-hailuo-02-768p", "x-freepik-api-key"),
        ("https://api.freepik.com/v1/ai/image-to-video", "x-freepik-api-key"),
        ("https://api.magnific.com/v1/ai/image-to-video", "x-magnific-api-key")
    ]
    
    headers_base = {
        "Content-Type": "application/json",
        "User-Agent": "SestepaBot/1.0"
    }
    
    payload = {
        "image": image_b64,
        "prompt": prompt,
        "duration": duration
    }
    
    task_id = None
    poll_url_base = None
    auth_header_name = None
    
    for url, auth_hdr in candidate_endpoints:
        print(f"\n[*] Tentando submissao no endpoint: {url}")
        headers = headers_base.copy()
        headers[auth_hdr] = api_key
        status, resp = send_request(url, headers, payload, method="POST")
        
        if status in (200, 201, 202) and ("task_id" in resp or "id" in resp or "data" in resp):
            task_id = resp.get("task_id") or resp.get("id") or (resp.get("data", {}).get("task_id") if isinstance(resp.get("data"), dict) else None)
            if task_id:
                print(f"[+] Tarefa iniciada com sucesso! Task ID: {task_id}")
                poll_url_base = url
                auth_header_name = auth_hdr
                break
        else:
            print(f"[-] Nao foi possivel iniciar via {url} (status: {status})")
    
    if not task_id:
        print("[!] Erro: Nenhum endpoint de video aceitou a requisicao. Verifique saldo/permissoes da chave.")
        sys.exit(1)
        
    # Polling do status da tarefa
    poll_headers = {
        auth_header_name: api_key,
        "User-Agent": "SestepaBot/1.0"
    }
    
    poll_endpoint = f"{poll_url_base}/{task_id}"
    print(f"\n[*] Monitorando status da renderizacao em: {poll_endpoint}")
    
    max_wait_seconds = 300
    start_time = time.time()
    video_url = None
    
    while time.time() - start_time < max_wait_seconds:
        time.sleep(10)
        status_code, status_resp = send_request(poll_endpoint, poll_headers, method="GET")
        if status_code != 200:
            print(f"[*] Aguardando processamento na nuvem (HTTP {status_code})...")
            continue
            
        raw_status = status_resp.get("status") or status_resp.get("data", {}).get("status", "")
        task_status = str(raw_status).lower()
        print(f"[*] Status atual: {raw_status}")
        
        if task_status in ("completed", "success", "done"):
            data = status_resp.get("data", {})
            generated = data.get("generated", [])
            if generated and isinstance(generated, list) and len(generated) > 0:
                video_url = generated[0]
            if not video_url:
                video_url = data.get("video_url") or data.get("url") or status_resp.get("video_url")
            break
        elif task_status in ("failed", "error"):
            err_details = status_resp.get("error") or status_resp.get("data", {}).get("error", "")
            print(f"[!] Erro retornado pela IA no processamento: {err_details}")
            sys.exit(1)
            
    if not video_url:
        print("[!] Timeout ou URL de video nao encontrada no retorno.")
        sys.exit(1)
        
    # Salvar video nas pastas oficiais do protocolo
    ratio_tag = "9x16" if ratio == "9:16" else "16x9"
    dur_tag = f"{duration:02d}s"
    renders_dest = G_DRIVE_BASE / "videos" / slug / "renders" / f"{slug}-2-magnific-living-motion-{ratio_tag}.mp4"
    aprovados_dest = G_DRIVE_BASE / "videos" / slug / "aprovados" / f"{slug}-2-{ratio_tag}-{dur_tag}-magnific-living-motion-mallorca-sestepa-garden-design.mp4"
    
    download_file(video_url, renders_dest)
    download_file(video_url, aprovados_dest)
    print(f"\n[V] Pipeline concluido! Arquivos entregues com sucesso em:")
    print(f"    - {renders_dest}")
    print(f"    - {aprovados_dest}")

def main():
    parser = argparse.ArgumentParser(description="Pipeline Oficial Magnific AI — Living Motion")
    parser.add_argument("--image", help="Caminho da imagem estatica original")
    parser.add_argument("--slug", required=True, help="Slug do projeto (ex: portals-nous)")
    parser.add_argument("--prompt", help="Prompt de animacao botanica")
    parser.add_argument("--duration", type=int, default=5, help="Duracao em segundos (padrao: 5)")
    parser.add_argument("--ratio", default="9:16", choices=["9:16", "16:9"], help="Proporcao de aspecto (padrao: 9:16)")
    parser.add_argument("--move-path-cut", action="store_true", help="Mover corte estatico antigo para renders")
    parser.add_argument("--probe", action="store_true", help="Testar endpoints da API")
    
    args = parser.parse_args()
    if args.probe:
        probe_endpoints()
        return
    if args.move_path_cut:
        move_rejected_path_cut(args.slug)
        if not args.image:
            return

    image_path = Path(args.image)
    if not image_path.is_file():
        print(f"[!] Erro: Imagem nao encontrada em {image_path}")
        sys.exit(1)
        
    run_animation(image_path, args.slug, args.prompt, args.duration, args.ratio)

if __name__ == "__main__":
    main()
