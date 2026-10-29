import os

orig_dir = r"G:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\santa-eugenia"

files = os.listdir(orig_dir)
print(f"Listing files in {orig_dir}:")
for f in files:
    full_p = os.path.join(orig_dir, f)
    is_f = os.path.isfile(full_p)
    print(f"  {'FILE' if is_f else 'DIR '}: {f}")
