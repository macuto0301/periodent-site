# 🔧 Guía de Configuración .env

## Archivos de Configuración

Este proyecto usa variables de entorno para diferentes ambientes:

### `.env.example` 📋
- **Propósito:** Template con todas las variables necesarias
- **Uso:** Referencia para saber qué variables existen
- **Commit:** Sí (está en git)

### `.env.local` 🏠
- **Propósito:** Configuración para desarrollo local
- **Uso:** Cambiar `NUXT_PUBLIC_API_URL` según dónde corre tu API
- **Commit:** No (gitignored)
- **Valores por defecto:** localhost:3000

### `.env.production` 🚀
- **Propósito:** Configuración para producción
- **Uso:** URLs del servidor de producción
- **Commit:** Sí (está en git)
- **Valores por defecto:** periodent.com.ve

---

## Variables de Entorno

### `NUXT_PUBLIC_SITE_URL`
- **Descripción:** URL pública del sitio
- **Uso:** SEO, sitemap, URLs canónicas, open graph
- **Formato:** `https://dominio.com`
- **Desarrollo:** `http://localhost:3000`
- **Producción:** `https://periodent.com.ve`

### `NUXT_PUBLIC_API_URL`
- **Descripción:** URL base para las llamadas API
- **Uso:** Todas las peticiones fetch a controladores PHP
- **Formato:** `https://dominio.com/api`
- **Desarrollo:** `http://localhost:3000/api`
- **Producción:** `https://periodent.com.ve/api`

### `JWT_SECRET`
- **Descripción:** Secreto JWT (debe coincidir con el backend)
- **Uso:** Verificación de tokens JWT en cliente (si es necesario)
- **Seguridad:** ⚠️ No es un secreto verdadero (expuesto en cliente)
- **Desarrollo:** `8f6c7a2e9b4d41f1a7c0e5d93b2f6a8c4e1d9f7b3a5c0e2d8f4b6a1c9e7`
- **Producción:** Cambiar a un valor único

### `NODE_ENV`
- **Descripción:** Ambiente de ejecución
- **Valores:** `development` | `production` | `staging`
- **Impacto:** Afecta optimizaciones, DevTools, logs

---

## 📝 Guía Rápida

### Desarrollo Local
```bash
# Asegúrate de que .env.local exista
cat nuxt-site/.env.local

# Si necesitas cambiar la API, edita:
NUXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Antes de Deploy
```bash
# Verifica que .env.production tenga las URLs correctas
cat nuxt-site/.env.production

# DEBE tener:
NUXT_PUBLIC_SITE_URL=https://periodent.com.ve
NUXT_PUBLIC_API_URL=https://periodent.com.ve/api
```

### Variables en Componentes
```typescript
// En cualquier componente/composable:
const config = useRuntimeConfig()

console.log(config.public.siteUrl)    // URL del sitio
console.log(config.public.apiUrl)     // URL de la API
```

---

## 🐛 Troubleshooting

### "API returns 404"
Revisa que `NUXT_PUBLIC_API_URL` apunte a la URL correcta donde corre tu API.

### "SEO tags con URL incorrecta"
Verifica que `NUXT_PUBLIC_SITE_URL` sea la URL correcta del sitio.

### Variables no se actualizan
1. Reinicia el servidor: `npm run dev`
2. Limpia caché: `npm run build` (en producción)

---

## 🔒 Seguridad

**IMPORTANTE:**
- `.env.local` está en `.gitignore` (datos locales)
- `.env.production` está en git (datos públicos, sin secretos)
- NUNCA guardes API keys, contraseñas o datos sensibles en `.env`
- Todas las variables `NUXT_PUBLIC_*` son visibles en el cliente
