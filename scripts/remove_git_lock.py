import os
lock_file = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\.git\index.lock"
if os.path.exists(lock_file):
    os.remove(lock_file)
    print("Deleted stale index.lock")
else:
    print("No lock file")
