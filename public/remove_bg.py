from rembg import remove
from PIL import Image
import os

def remove_background(input_path, output_path):
    print(f"Processing {input_path}...")
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    remove_background("Image 1 (1).jpg", "profile-nobg.png")
