import os

legacy_dir = r"G:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\santa-eugenia\legacy-public-slug\santa-eugenia\images"

files = [
    "1. garden design mallorca santa eugenia sestepa landscape design (5).jpg",
    "garden design mallorca santa eugenia sestepa landscape design (2).jpg",
    "garden design mallorca santa eugenia sestepa landscape design (4).jpg",
    "garden design mallorca santa eugenia sestepa landscape design (6).jpg",
    "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca.jpg",
    "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-2.jpg",
    "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-12.jpg"
]

print(f"Checking directory: {legacy_dir}")
for f in files:
    p = os.path.join(legacy_dir, f)
    print(f"{f}: exists={os.path.exists(p)}")
