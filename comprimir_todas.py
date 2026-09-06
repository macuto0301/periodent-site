from PIL import Image
import os

# Carpeta de imágenes
img_dir = "public/img/"

# Extensiones a comprimir
exts = [".webp", ".png", ".avif"]

for fname in os.listdir(img_dir):
    fpath = os.path.join(img_dir, fname)
    ext = os.path.splitext(fname)[1].lower()
    if ext in exts:
        try:
            img = Image.open(fpath)
            # Redimensionar si es necesario (ejemplo: ancho máximo 1400px)
            max_width = 1400
            if img.width > max_width:
                ratio = max_width / img.width
                new_size = (max_width, int(img.height * ratio))
                img = img.resize(new_size, Image.LANCZOS)
            # Guardar comprimido (calidad 78, método 6 para webp)
            if ext == ".webp":
                img.save(fpath, "WEBP", quality=78, method=6, optimize=True)
            elif ext == ".png":
                img.save(fpath, "PNG", optimize=True)
            elif ext == ".avif":
                img.save(fpath, "AVIF", quality=78)
            print(f"Comprimido: {fname}")
        except Exception as e:
            print(f"No se pudo comprimir {fname}: {e}")
