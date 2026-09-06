# Periodent - Sitio Web Oficial (Nuxt 3)

Sitio web oficial de **Especialidades Odontológicas Periodent**, desarrollado con **Nuxt 3**, **Tailwind CSS** y optimizado para **Cloudflare Pages**.

---

## 🚀 Requisitos Previos

- **Node.js**: v18.0.0 o superior (recomendado Node.js 20+)
- **npm**: v9.0.0 o superior

---

## 🛠️ Instalación y Desarrollo Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   Crea un archivo `.env` basado en `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

---

## 📦 Compilación para Producción

Para generar los archivos de producción optimizados para Cloudflare Pages:

```bash
npm run build
```

Para previsualizar la compilación localmente:

```bash
npm run preview
```

---

## 🌐 Despliegue en Cloudflare Pages

Este proyecto está configurado con el preset Nitro `cloudflare_pages`.

### Pasos para conectar con Cloudflare Pages:

1. Ve a tu panel de **Cloudflare Dashboard** > **Workers & Pages**.
2. Haz clic en **Create Application** > pestaña **Pages** > **Connect to Git**.
3. Selecciona tu repositorio de GitHub (`periodent-site`).
4. Configura los parámetros de compilación (Build settings):
   - **Framework preset**: `Nuxt.js` (o Ninguno)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (dejar en blanco o raíz)
5. **Variables de entorno (Environment Variables)** en Cloudflare Pages:
   - `NUXT_PUBLIC_SITE_URL`: `https://periodent.com.ve`
   - `NUXT_PUBLIC_API_URL`: `https://periodent.com.ve/api`
   - `NITRO_PRESET`: `cloudflare_pages` (opcional, ya está por defecto)
6. Haz clic en **Save and Deploy**.

---

## 📂 Estructura del Proyecto

```
.
├── assets/          # Estilos globales y recursos CSS
├── components/      # Componentes Vue organizados por sección (home, servicios, blog, UI)
├── composables/     # Composables reutilizables (autenticación, API, caché)
├── content/         # Datos dinámicos/estáticos (entradas del blog)
├── data/            # Información de la clínica (servicios, precios, doctores)
├── layouts/         # Layouts de la aplicación (default, admin)
├── pages/           # Rutas y páginas de la aplicación
├── plugins/         # Plugins de Nuxt
├── public/          # Recursos estáticos servidos directamente (imágenes, robots.txt, sitemap)
├── scripts/         # Scripts auxiliares de parches y optimizaciones
├── nuxt.config.ts   # Configuración principal de Nuxt y Nitro (Cloudflare Pages)
└── wrangler.json    # Configuración de Cloudflare Pages
```

