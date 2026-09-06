# Optimizaciones de Performance Aplicadas

## Fecha: 2 de Febrero 2026

### Problemas Identificados (Lighthouse Score: 25/100)
- **FCP**: 4.1s
- **LCP**: 4.7s  
- **Speed Index**: 5.2s
- **Render-blocking CSS**: 600ms
- **Font Awesome completo**: 18KB sin usar
- **JavaScript no usado**: 66KB

### Soluciones Implementadas

#### 1. **Optimización de Font Awesome** ✅
**Problema**: Cargaba 18KB de Font Awesome completo (solo usábamos ~20 iconos)

**Solución**:
- Creado `/public/icons.css` con subset mínimo de iconos
- Solo carga los 2 archivos WOFF2 necesarios (solid + brands)
- Añadido `font-display: swap` para evitar FOIT
- **Ahorro estimado**: ~16KB + mejor render

#### 2. **Optimización de Google Fonts** ✅
**Problema**: Fonts bloqueaban el render inicial

**Solución**:
- Cambiado a `font-display=swap` directo en URL
- Añadido `preconnect` a `fonts.googleapis.com` y `fonts.gstatic.com`
- Añadido `preconnect` a `cdnjs.cloudflare.com`
- **Ahorro estimado**: ~200ms en FCP

#### 3. **Imágenes del Hero Slider** ✅
**Estado actual**: Ya optimizado
- Primera imagen: `loading="eager"` + `fetchpriority="high"`
- Resto: `loading="lazy"`
- Dimensiones explícitas: `width="900" height="500"`
- Formato WebP con fallback

### Próximas Optimizaciones Recomendadas

#### 4. **Reducir JavaScript no usado** (Pendiente)
- Analizar bundle de Nuxt con `nuxt analyze`
- Considerar code-splitting más agresivo
- **Ahorro potencial**: 66KB

#### 5. **Inline Critical CSS** (Pendiente)
- Extraer CSS crítico del above-the-fold
- Inline en `<head>`, defer el resto
- **Ahorro potencial**: 600ms en render

#### 6. **Optimizar animaciones** (Pendiente)
- Revisar animación del navbar (`top` property)
- Cambiar a `transform` para compositing
- **Mejora**: CLS y smoothness

#### 7. **Lazy load de componentes** (Pendiente)
```vue
// Ejemplo para componentes pesados
const CtaFinal = defineAsyncComponent(() => import('~/components/CtaFinal.vue'))
```

### Comandos para Re-build

```bash
cd /home/master/periodent-site/nuxt-site
bash build-local.sh
```

### Métricas Esperadas Post-Optimización

- **Performance Score**: 25 → **60-70** (con estas optimizaciones)
- **FCP**: 4.1s → **2.5s**
- **LCP**: 4.7s → **3.0s**

### Notas Importantes

1. El sitio está en **Slow 4G** en el test (peor escenario)
2. Cloudflare Insights añade 94ms de blocking (considerar remover si no es crítico)
3. La mayoría del JavaScript viene del bundle de Vue/Nuxt (difícil de reducir sin cambiar arquitectura)

### Archivos Modificados

- `/nuxt.config.ts` - Optimizado head links
- `/public/icons.css` - Nuevo archivo con subset de iconos
