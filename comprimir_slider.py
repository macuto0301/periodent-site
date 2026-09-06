from PIL import Image

# Lista de imágenes a comprimir
images = [
    "public/img/slider-image1.webp",
      "public/img/slider-image2.webp",
    "public/img/slider-image3.webp"

]

for img_path in images:
    img = Image.open(img_path)
    # Redimensionar si es necesario (ejemplo: ancho máximo 1200px)
    max_width = 1200
    if img.width > max_width:
        ratio = max_width / img.width
        new_size = (max_width, int(img.height * ratio))
        img = img.resize(new_size, Image.LANCZOS)
    # Guardar comprimido (calidad 78, método 6)
    img.save(img_path, "WEBP", quality=78, method=6, optimize=True)
    print(f"Comprimido: {img_path}")
