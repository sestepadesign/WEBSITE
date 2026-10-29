import os

# Destination folder in G:
orig_dir = r"g:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\santa-eugenia"

# The 3 approved photos from the screenshot:
approved_files = {
    "garden design mallorca santa eugenia sestepa landscape design (2).png",
    "garden design mallorca santa eugenia sestepa landscape design (4).png",
    "garden design mallorca santa eugenia sestepa landscape design (6).png"
}

if os.path.exists(orig_dir):
    all_files = os.listdir(orig_dir)
    print(f"Total files currently in {orig_dir}: {len(all_files)}")
    for f in all_files:
        full_p = os.path.join(orig_dir, f)
        if os.path.isfile(full_p):
            if f not in approved_files:
                print(f"Removing unapproved/old file: {f}")
                os.remove(full_p)
            else:
                print(f"Keeping approved file: {f}")
    print("Folder cleaned. Remaining files:")
    for f in os.listdir(orig_dir):
        print(f"  - {f}")
else:
    print(f"Directory does not exist: {orig_dir}")
