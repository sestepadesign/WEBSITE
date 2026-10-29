import os

j_dir = r"J:\Meu Drive\S'ESTEPA 2026\FOTOS 2026\SANTA EUGENIA (JAUME)\SELECCIONADAS Y EDITADAS PARA SESTEPA DESIGN"

try:
    files = os.listdir(j_dir)
    print("Files found in J: directory:")
    for f in files:
        full_p = os.path.join(j_dir, f)
        size = os.path.getsize(full_p)
        print(f"  {f} ({size} bytes)")
except Exception as e:
    print("Error listing J: dir:", e)
