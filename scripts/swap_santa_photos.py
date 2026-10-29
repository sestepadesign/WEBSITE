import shutil
import os

images_dir = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\portfolio\terrace-garden-santa-eugenia\images"

p01 = os.path.join(images_dir, "garden-design-mallorca-santa-eugenia-sestepa-01.webp")
p02 = os.path.join(images_dir, "garden-design-mallorca-santa-eugenia-sestepa-02.webp")
p03 = os.path.join(images_dir, "garden-design-mallorca-santa-eugenia-sestepa-03.webp")
p_card = os.path.join(images_dir, "garden-design-mallorca-santa-eugenia-sestepa-card.webp")

tmp = os.path.join(images_dir, "tmp.webp")

# We want photo 03 (Agapanthus close up) to be physically named 01.webp
# And photo 01 (Lawn with spheres) to be physically named 03.webp
shutil.copy2(p03, tmp)
shutil.copy2(p01, p03)
shutil.copy2(tmp, p01)
os.remove(tmp)

print("Swapped 01.webp and 03.webp so that 01.webp is physically the Agapanthus close up.")
