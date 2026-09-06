// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false }, // Desabilitar devtools en producción
  ssr: true,
  css: [],
  pages: true,
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  alias: {
    'unenv/runtime/mock/empty.mjs': 'unenv/dist/runtime/mock/empty.mjs',
    'unenv/runtime/mock/noop.mjs': 'unenv/dist/runtime/mock/noop.mjs',
    'unenv/runtime/mock/proxy.mjs': 'unenv/dist/runtime/mock/proxy.mjs',
    'unenv/dist/runtime/runtime/mock/empty.mjs': 'unenv/dist/runtime/mock/empty.mjs',
    'unenv/dist/runtime/runtime/mock/noop.mjs': 'unenv/dist/runtime/mock/noop.mjs',
    'unenv/dist/runtime/runtime/mock/proxy.mjs': 'unenv/dist/runtime/mock/proxy.mjs'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/image'],
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET || 'default-secret-change-in-production',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://periodent.com.ve',
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://periodent.com.ve/api'
    }
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://periodent.com.ve',
    name: 'Especialidades Odontológicas Periodent',
    description: 'Especialidades Odontológicas Periodent: ortodoncia, implantes y limpieza dental.',
    indexable: true,
    trailingSlash: false,
    defaultLocale: 'es'
  },
  seo: {
    meta: {
      titleTemplate: '%s',
      description: 'Especialidades Odontológicas Periodent: ortodoncia, implantes y limpieza dental.',
      themeColor: '#EC407A'
    },
    og: { type: 'website' },
    twitter: { card: 'summary_large_image' },
    redirectToCanonicalSiteUrl: true,
    ogImage: {
      enabled: false
    }
  },
  sitemap: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://periodent.com.ve',
    gzip: true,
    exclude: ['/admin/**'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.5
    },
    urls: async () => {
      return [
        // Páginas principales - Alta prioridad
        {
          loc: '/',
          lastmod: new Date().toISOString(),
          changefreq: 'daily',
          priority: 1.0
        },
        {
          loc: '/servicios',
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.9
        },
        {
          loc: '/precios',
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.9
        },
        {
          loc: '/contacto',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: '/preguntas-frecuentes',
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.8
        },

        // Ubicaciones - Muy importante para SEO local
        {
          loc: '/ubicacion',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.9
        },
        {
          loc: '/ubicacion/biscucuy',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.9
        },
        {
          loc: '/ubicacion/chabasquen',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.9
        },

        // Blog - Contenido que cambia frecuentemente
        {
          loc: '/blog',
          lastmod: new Date().toISOString(),
          changefreq: 'daily',
          priority: 0.8
        },

        // Posts del blog - Prioridad media-alta
        {
          loc: '/blog/importancia-salud-bucal',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.7
        },
        {
          loc: '/blog/ortodoncia-invisible-vs-tradicional',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.7
        },
        {
          loc: '/blog/implantes-dentales-todo-lo-que-debes-saber',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.7
        },
        {
          loc: '/blog/limpieza-dental-profesional-cada-cuanto',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.7
        },

        // Posts SEO local - Alta prioridad para posicionamiento local
        {
          loc: '/blog/clinica-dental-chabasquen-portuguesa',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.85
        },
        {
          loc: '/blog/ortodoncia-en-portuguesa-venezuela',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.85
        },
        {
          loc: '/blog/implantes-dentales-portuguesa-chabasquen',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.85
        },
        {
          loc: '/blog/clinica-dental-biscucuy-portuguesa',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.85
        },
        {
          loc: '/blog/ortodoncia-biscucuy-brackets-invisalign',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.85
        },
        {
          loc: '/blog/implantes-dentales-biscucuy-garantizados',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.85
        },

        // Nuevos artículos educativos
        {
          loc: '/blog/diseno-de-sonrisa-carillas-dentales',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },
        {
          loc: '/blog/endodoncia-tratamiento-conducto-mitos-verdades',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },
        {
          loc: '/blog/odontopediatria-cuidado-dental-ninos',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },
        {
          loc: '/blog/blanqueamiento-dental-profesional-vs-casero',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },
        {
          loc: '/blog/periodontitis-gingivitis-sangrado-encias-tratamiento',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },
        {
          loc: '/blog/bruxismo-sintomas-placas-miorrelajantes',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },
        {
          loc: '/blog/muelas-del-juicio-extraccion-terceros-molares',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },
        {
          loc: '/blog/sensibilidad-dental-causas-y-tratamiento',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },
        {
          loc: '/blog/halitosis-mal-aliento-causas-soluciones',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },
        {
          loc: '/blog/cuidados-post-ortodoncia-importancia-retenedores',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.75
        },

        // Política de privacidad - Baja prioridad
        {
          loc: '/privacidad',
          lastmod: new Date().toISOString(),
          changefreq: 'yearly',
          priority: 0.3
        }
      ]
    }
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: (process.env.NUXT_PUBLIC_SITE_URL || 'https://periodent.com.ve') + '/sitemap.xml'
  },
  routeRules: {
    '/': { static: true },
    '/servicios': { static: true },
    '/precios': { static: true },
    '/contacto': { static: true },
    '/privacidad': { static: true },
    '/preguntas-frecuentes': { static: true },
    '/blog': { static: true },
    '/blog/**': { static: true },
    '/ubicacion': { static: true },
    '/ubicacion/**': { static: true },
    '/home': { redirect: '/' },
    '/inicio': { redirect: '/' }
  },
  vite: {
    resolve: {
      alias: {
        'unenv/runtime/mock/empty.mjs': 'unenv/dist/runtime/mock/empty.mjs',
        'unenv/runtime/mock/noop.mjs': 'unenv/dist/runtime/mock/noop.mjs',
        'unenv/runtime/mock/proxy.mjs': 'unenv/dist/runtime/mock/proxy.mjs',
        'unenv/dist/runtime/runtime/mock/empty.mjs': 'unenv/dist/runtime/mock/empty.mjs',
        'unenv/dist/runtime/runtime/mock/noop.mjs': 'unenv/dist/runtime/mock/noop.mjs',
        'unenv/dist/runtime/runtime/mock/proxy.mjs': 'unenv/dist/runtime/mock/proxy.mjs'
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true // Remove console logs in production
        }
      }
    }
  },
  build: {
    transpile: []
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#EC407A' },
        { name: 'msapplication-TileColor', content: '#EC407A' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'Especialidades Odontológicas Periodent: ortodoncia, implantes y limpieza dental.' },
        { property: 'og:site_name', content: 'Especialidades Odontológicas Periodent' },
        { property: 'og:locale', content: 'es_ES' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap' },
        { rel: 'stylesheet', href: '/style.css' },
        { rel: 'stylesheet', href: '/icons.css' }
      ]
    }
  },
  modern: true,
  compatibilityDate: '2024-08-01',
  vite: {
    build: {
      target: 'es2018'
    }
  },
  nitro: {
    alias: {
      'unenv/runtime/mock/empty.mjs': 'unenv/dist/runtime/mock/empty.mjs',
      'unenv/runtime/mock/noop.mjs': 'unenv/dist/runtime/mock/noop.mjs',
      'unenv/runtime/mock/proxy.mjs': 'unenv/dist/runtime/mock/proxy.mjs',
      'unenv/dist/runtime/runtime/mock/empty.mjs': 'unenv/dist/runtime/mock/empty.mjs',
      'unenv/dist/runtime/runtime/mock/noop.mjs': 'unenv/dist/runtime/mock/noop.mjs',
      'unenv/dist/runtime/runtime/mock/proxy.mjs': 'unenv/dist/runtime/mock/proxy.mjs'
    },
    devProxy: {
      '/api': {
        target: 'https://periodent.com.ve/api',
        changeOrigin: true
      }
    },
    preset: process.env.NITRO_PRESET || 'cloudflare_pages',
    prerender: {
      crawlLinks: true,
      routes: [
        '/', '/servicios', '/precios', '/contacto', '/privacidad', '/preguntas-frecuentes',
        '/blog',
        '/blog/importancia-salud-bucal',
        '/blog/ortodoncia-invisible-vs-tradicional',
        '/blog/implantes-dentales-todo-lo-que-debes-saber',
        '/blog/limpieza-dental-profesional-cada-cuanto',
        '/blog/clinica-dental-chabasquen-portuguesa',
        '/blog/ortodoncia-en-portuguesa-venezuela',
        '/blog/implantes-dentales-portuguesa-chabasquen',
        '/blog/clinica-dental-biscucuy-portuguesa',
        '/blog/ortodoncia-biscucuy-brackets-invisalign',
        '/blog/implantes-dentales-biscucuy-garantizados',
        '/blog/diseno-de-sonrisa-carillas-dentales',
        '/blog/endodoncia-tratamiento-conducto-mitos-verdades',
        '/blog/odontopediatria-cuidado-dental-ninos',
        '/blog/blanqueamiento-dental-profesional-vs-casero',
        '/blog/periodontitis-gingivitis-sangrado-encias-tratamiento',
        '/blog/bruxismo-sintomas-placas-miorrelajantes',
        '/blog/muelas-del-juicio-extraccion-terceros-molares',
        '/blog/sensibilidad-dental-causas-y-tratamiento',
        '/blog/halitosis-mal-aliento-causas-soluciones',
        '/blog/cuidados-post-ortodoncia-importancia-retenedores',
        '/ubicacion',
        '/ubicacion/biscucuy',
        '/ubicacion/chabasquen',
        '/robots.txt', '/sitemap.xml'
      ]
    },
    headers: {
      '/_nuxt/**': {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    }
  }
})