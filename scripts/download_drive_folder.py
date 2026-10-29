import sys
import os
import shutil
import zipfile
from pathlib import Path

def main():
    folder_url = sys.argv[1] if len(sys.argv) > 1 else "https://drive.google.com/drive/folders/1BvozUtiiVubTIYZha-G0UuHb2cgw7VbQ"
    output_dir = Path(r"G:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\sant-llorenc\Sant Llorenç Editadas Sofia Canva")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Verifica se ha algum zip recente em Downloads
    dl_dir = Path(r"C:\Users\inesg\Downloads")
    zips = list(dl_dir.glob("*.zip"))
    # Ordena por data de modificacao decrescente
    zips.sort(key=lambda p: p.stat().st_mtime, reverse=True)
    
    extracted = False
    for z in zips[:5]:
        name_lower = z.name.lower()
        if any(k in name_lower for k in ["sant", "lloren", "sofia", "canva", "drive"]):
            print(f"Descompactando arquivo encontrado em Downloads: {z.name}")
            with zipfile.ZipFile(z, 'r') as zip_ref:
                zip_ref.extractall(output_dir)
            print(f"Extraido com sucesso para {output_dir}")
            extracted = True
            break
            
    if extracted:
        return

    import gdown
    print(f"Tentando download via gdown da pasta: {folder_url}")
    gdown.download_folder(url=folder_url, output=str(output_dir), quiet=False, use_cookies=False)
    print("Download concluido com sucesso!")

if __name__ == "__main__":
    main()


