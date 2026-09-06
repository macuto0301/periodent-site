# Instrucciones de Instalación - Periodent en Namecheap

## 📦 Archivos Preparados

- **periodent-site.zip** (689 KB) - Archivo comprimido recomendado
- **periodent-site.tar.gz** (675 KB) - Alternativa en formato tar.gz

## 🚀 Pasos de Instalación en Namecheap (cPanel)

### 1. **Descomprimir en el servidor**

En cPanel:
- Ve a **File Manager**
- Navega a la carpeta **public_html** (donde va tu sitio web)
- **Sube** el archivo `periodent-site.zip`
- Haz clic derecho → **Extract** (Extraer)

Esto creará una carpeta `.output/public/` con todos los archivos.

### 2. **Mover archivos a la raíz**

- Abre el contenido de `.output/public/`
- **Selecciona todos los archivos** (Ctrl+A)
- Usa el botón **Move** (Mover) o copia/pega
- Muévelos a **public_html** (la raíz)
- **Elimina** la carpeta `.output` vacía

Estructura final:
```
public_html/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── style.css
├── _nuxt/
├── _robots.txt
├── img/
└── (todas las carpetas de páginas)
```

### 3. **Configurar 404 personalizado (importante)**

En cPanel → **Error Pages**:
- Selecciona el dominio
- Para el error **404**, configura: `/404.html`

**O** mediante `.htaccess` (colocar en `public_html`):

```apache
ErrorDocument 404 /404.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /200.html [L]
</IfModule>
```

### 4. **Verificar robots.txt**

Asegúrate de que exista `robots.txt` en la raíz con este contenido:

```
User-agent: *
Allow: /
Sitemap: https://periodent.com.ve/sitemap.xml
```

## ✅ Verificación

Después de la instalación:

1. **Prueba el sitio:** https://periodent.com.ve/
2. **Verifica 404:** https://periodent.com.ve/pagina-inexistente
3. **Robots.txt:** https://periodent.com.ve/robots.txt
4. **Sitemap:** https://periodent.com.ve/sitemap.xml

## 🔍 Google Search Console

Una vez en línea, reenvía:
- El sitemap en Google Search Console
- Solicita re-indexación de las páginas
- Verifica cobertura

## 📝 Notas Importantes

- El sitio es **estático** (HTML puro) - no requiere Node.js
- No necesita servidor de aplicaciones
- Cache-friendly para mejor rendimiento
- Las imágenes están en formato WebP/AVIF (compatibles con navegadores modernos)

## ⚙️ Si algo falla

### Problema: Redirecciones no funcionan

Solución: Asegúrate de que `.htaccess` esté en la raíz y que el módulo `mod_rewrite` esté habilitado (generalmente está por defecto en Namecheap).

### Problema: Archivos CSS/JS no cargan

Solución: Verifica que la carpeta `_nuxt/` esté en la raíz con todos sus archivos.

### Problema: 404 personalizado no aparece

Solución: Verifica que `404.html` esté en la raíz de `public_html`.

## 📞 Soporte

Última actualización: 14 de Enero de 2026
Versión: Nuxt 4.2.2
