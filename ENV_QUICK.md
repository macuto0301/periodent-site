# ⚡ Quick Start - Variables de Entorno

## Paso 1: Copiar template
```bash
cd nuxt-site
cp .env.example .env.local
```

## Paso 2: Configurar según tu entorno

### 🏠 Desarrollo Local
Si tu API corre en `http://localhost:3000`:
```bash
# .env.local
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_API_URL=http://localhost:3000/api
JWT_SECRET=8f6c7a2e9b4d41f1a7c0e5d93b2f6a8c4e1d9f7b3a5c0e2d8f4b6a1c9e7
NODE_ENV=development
```

Si tu API corre en otro puerto (ej: 8000):
```bash
# .env.local
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_API_URL=http://localhost:8000/api
JWT_SECRET=8f6c7a2e9b4d41f1a7c0e5d93b2f6a8c4e1d9f7b3a5c0e2d8f4b6a1c9e7
NODE_ENV=development
```

### 🚀 Producción
Ya está configurado en `.env.production`:
```bash
NUXT_PUBLIC_SITE_URL=https://periodent.com.ve
NUXT_PUBLIC_API_URL=https://periodent.com.ve/api
JWT_SECRET=8f6c7a2e9b4d41f1a7c0e5d93b2f6a8c4e1d9f7b3a5c0e2d8f4b6a1c9e7
NODE_ENV=production
```

## Paso 3: Reiniciar servidor
```bash
npm run dev   # Nuxt detecta cambios en .env.local
```

## ✅ Verificar que funciona
1. Abre http://localhost:3000
2. Abre browser DevTools (F12) → Console
3. Deberías ver la app sin errores de CORS
4. Las llamadas API deberían ir a la URL correcta

## 📍 Checklist
- [ ] Archivo `.env.local` existe
- [ ] `NUXT_PUBLIC_API_URL` apunta a URL correcta
- [ ] Servidor Nuxt reiniciado
- [ ] API está corriendo en el puerto especificado
- [ ] No hay errores en console

---

**Más detalles:** Ver [ENV_GUIDE.md](ENV_GUIDE.md)
