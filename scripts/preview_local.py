import os
import shutil
import subprocess
import tempfile
import sys

# Paths
src_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
temp_root = tempfile.gettempdir()
dest_dir = os.path.join(temp_root, "sestepa-design-preview")

print(f"Source directory: {src_dir}")
print(f"Temporary target: {dest_dir}")

# Exclude list for copying
ignore_patterns = shutil.ignore_patterns(
    "node_modules", ".git", ".astro", "dist", ".giscus"
)

# Clean up existing temp directory
if os.path.exists(dest_dir):
    print("Cleaning up old temp directory...")
    try:
        shutil.rmtree(dest_dir)
    except Exception as e:
        print(f"Warning: Could not remove old directory: {e}")

# Copy directory
print("Cloning workspace to local disk (%TEMP%)...")
shutil.copytree(src_dir, dest_dir, ignore=ignore_patterns, dirs_exist_ok=True)

# Run npm install and npm run dev in the temp directory
try:
    print("Installing dependencies...")
    subprocess.run("npm install", shell=True, cwd=dest_dir, check=True)
    
    print("Starting development server...")
    subprocess.run("npm run dev", shell=True, cwd=dest_dir, check=True)
except KeyboardInterrupt:
    print("\nStopping preview server...")
except Exception as e:
    print(f"Error occurred: {e}")
    sys.exit(1)
