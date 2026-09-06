# 🎨 QuillEditor Vue 3 - Guía Completa

Documentación profesional para integrar y usar Quill Editor en Vue 3 con Composition API.

---

## 📋 Tabla de Contenidos

1. [Instalación](#instalación)
2. [Componente QuillEditor](#componente-quilleditor)
3. [Uso Básico](#uso-básico)
4. [Propiedades & Métodos](#propiedades--métodos)
5. [Personalización de Toolbar](#personalización-de-toolbar)
6. [Leer Contenido](#leer-contenido)
7. [Renderizar HTML](#renderizar-html)
8. [Eliminar Herramientas](#eliminar-herramientas)
9. [Redimensionar Editor](#redimensionar-editor)
10. [Buenas Prácticas](#buenas-prácticas)

---

## 🚀 Instalación

```bash
npm install quill @vueup/vue-quill
```

### Versiones Recomendadas
```json
{
  "quill": "^1.3.7",
  "@vueup/vue-quill": "^1.2.0"
}
```

---

## 🧩 Componente QuillEditor

El componente `QuillEditor.vue` está ubicado en:
```
components/QuillEditor.vue
```

### Características Principales

✅ **Composition API** con `<script setup>`
✅ **v-model** para sincronización bidireccional
✅ **TypeScript** completo
✅ **Solo Cliente** (evita SSR issues)
✅ **Ref DOM** seguro
✅ **Métodos expuestos** para acceso avanzado
✅ **CSS personalizable**
✅ **Gestión de memoria** (limpieza en unmount)

---

## 💡 Uso Básico

### En una Página o Componente

```vue
<template>
  <div class="container">
    <label>Contenido:</label>
    <QuillEditor 
      v-model="content" 
      placeholder="Escribe aquí..."
      min-height="400px"
    />
    <p>Caracteres: {{ content.length }}</p>
  </div>
</template>

<script setup lang="ts">
const content = ref('<p>Contenido inicial</p>')
</script>
```

### Importación Automática (Nuxt 3)

En Nuxt 3, `QuillEditor` se importa automáticamente si está en `components/`.

Si no funciona, registra manualmente:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  components: [
    { path: '~/components', pathPrefix: false }
  ]
})
```

---

## ⚙️ Propiedades & Métodos

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | Contenido HTML del editor |
| `placeholder` | `string` | `'Escribe aquí...'` | Texto placeholder |
| `minHeight` | `string` | `'400px'` | Altura mínima del editor |
| `readOnly` | `boolean` | `false` | Modo solo lectura |
| `theme` | `'snow' \| 'bubble'` | `'snow'` | Tema visual |
| `toolbar` | `array` | `[...]` | Configuración de toolbar |

### Métodos Expuestos

```ts
// Template
<QuillEditor ref="editor" v-model="content" />

// Script
const editor = ref();

// Obtener contenido
const { html, delta, text } = editor.value.getContents();

// Establecer contenido
editor.value.setContents('<h2>Nuevo contenido</h2>');

// Enfocar el editor
editor.value.focus();

// Acceso a instancia Quill completa
const quillInstance = editor.value.getInstance();
```

### Eventos Emitidos

```ts
@update:modelValue="(html) => console.log(html)"
@text-change="(delta, source) => console.log(delta)"
@selection-change="(range, oldRange, source) => console.log(range)"
```

---

## 🎛️ Personalización de Toolbar

### Toolbar Completa (Actual)

```ts
toolbar: [
  ['undo', 'redo'],
  [{ font: [] }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ script: 'sub' }, { script: 'super' }],
  [{ color: [] }, { background: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ align: [] }],
  ['link', 'image', 'video'],
  ['clean']
]
```

### Toolbar Minimalista

```vue
<script setup lang="ts">
const toolbarMinimal = [
  ['bold', 'italic', 'underline'],
  [{ header: [1, 2, false] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['link'],
  ['clean']
]
</script>

<template>
  <QuillEditor v-model="content" :toolbar="toolbarMinimal" />
</template>
```

### Toolbar Solo Lectura

```vue
<QuillEditor v-model="content" :toolbar="[]" read-only />
```

### Toolbar Personalizada por Props

```vue
<script setup lang="ts">
interface Props {
  showImages?: boolean
  showVideo?: boolean
  showCode?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showImages: true,
  showVideo: false,
  showCode: true
})

const customToolbar = computed(() => {
  const base = [
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
  ]
  
  if (props.showImages) base.push(['image'])
  if (props.showVideo) base.push(['video'])
  if (props.showCode) base.push(['code-block'])
  
  return base
})
</script>

<template>
  <QuillEditor v-model="content" :toolbar="customToolbar" />
</template>
```

---

## 📖 Leer Contenido

### Método Completo

```vue
<script setup lang="ts">
const editor = ref();

const handleSave = () => {
  const { html, delta, text } = editor.value.getContents();
  
  console.log('HTML:', html);
  // <p>Mi contenido</p>
  
  console.log('Delta:', delta);
  // { ops: [{ insert: 'Mi contenido\n' }] }
  
  console.log('Texto plano:', text);
  // Mi contenido
};
</script>

<template>
  <button @click="handleSave">Guardar</button>
</template>
```

### Leer en Tiempo Real

```vue
<script setup lang="ts">
const content = ref('');

const handleChange = (delta) => {
  // Se dispara con cada cambio
  const html = content.value; // Ya sincronizado por v-model
  saveToDatabase(html);
};
</script>

<template>
  <QuillEditor 
    v-model="content"
    @text-change="handleChange"
  />
</template>
```

---

## 🎬 Renderizar HTML

### ⚠️ Con Advertencia de Seguridad

```vue
<template>
  <div class="content">
    <!-- ⚠️ RIESGO XSS: Solo si confías en la fuente -->
    <div v-html="content"></div>
  </div>
</template>

<script setup lang="ts">
// Sanitizar antes de renderizar
import DOMPurify from 'dompurify';

const sanitizedContent = computed(() => 
  DOMPurify.sanitize(content.value)
);
</script>

<template>
  <div v-html="sanitizedContent"></div>
</template>
```

### Instalación de DOMPurify (Recomendado)

```bash
npm install dompurify
npm install -D @types/dompurify
```

### Alternativa Segura: Renderizar en Backend

```vue
<script setup lang="ts">
// Backend renderiza el HTML de forma segura
const { data: rendered } = await useFetch('/api/render-html', {
  method: 'POST',
  body: { html: content.value }
});
</script>

<template>
  <div v-html="rendered"></div>
</template>
```

---

## 🗑️ Eliminar Herramientas

### Remover un Botón Específico

```ts
// Toolbar sin negrita
const toolbar = [
  ['italic', 'underline'],
  [{ header: [1, 2] }],
  ['link'],
  ['clean']
]
```

### Remover Colores

```ts
// Remover color y background
const toolbar = [
  ['bold', 'italic', 'underline'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  // Sin [{ color: [] }, { background: [] }]
]
```

### Remover Todo Excepto Básico

```ts
const toolbarBasic = [
  ['bold', 'italic', 'underline'],
  [{ list: 'ordered' }, { list: 'bullet' }]
]
```

---

## 📏 Redimensionar Editor

### Altura Configurable

```vue
<script setup lang="ts">
const minHeight = ref('400px');
const maxHeight = ref('800px');
</script>

<template>
  <QuillEditor 
    v-model="content"
    :min-height="minHeight"
  />
</template>
```

### Con CSS Personalizado

```vue
<style scoped>
:deep(.ql-editor) {
  min-height: 500px;
  max-height: 600px;
  overflow-y: auto;
  font-size: 1.1rem;
  line-height: 1.8;
}
</style>
```

### Resize Vertical Automático

```vue
<style scoped>
:deep(.ql-editor) {
  min-height: 400px;
  resize: vertical;
  overflow: auto;
}
</style>
```

### Responsive (Móvil)

```vue
<script setup lang="ts">
const minHeight = computed(() => {
  if (window.innerWidth < 768) return '300px';
  return '400px';
});
</script>

<template>
  <QuillEditor 
    v-model="content"
    :min-height="minHeight"
  />
</template>
```

---

## ✅ Buenas Prácticas

### 1️⃣ Usar Composition API

```vue
<script setup lang="ts">
// ✅ Correcto: Reactive ref
const content = ref('');

// ❌ Evitar: Objeto reactivo sin ref
const data = reactive({ content: '' });
</script>
```

### 2️⃣ Manejo de Errores

```vue
<script setup lang="ts">
const content = ref('');
const error = ref<string | null>(null);

const handleSave = async () => {
  try {
    const { html } = editor.value?.getContents() || {};
    if (!html?.trim()) {
      error.value = 'El contenido no puede estar vacío';
      return;
    }
    await savePost(html);
  } catch (err: any) {
    error.value = err.message;
  }
};
</script>

<template>
  <div v-if="error" class="error">{{ error }}</div>
  <QuillEditor v-model="content" />
  <button @click="handleSave">Guardar</button>
</template>
```

### 3️⃣ Debouncing para Guardado Automático

```vue
<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';

const content = ref('');

const saveAutomatically = useDebounceFn(async (html: string) => {
  await updatePost(html);
}, 2000);

const handleContentChange = (delta) => {
  saveAutomatically(content.value);
};
</script>

<template>
  <QuillEditor 
    v-model="content"
    @text-change="handleContentChange"
  />
</template>
```

### 4️⃣ Validación de Contenido

```vue
<script setup lang="ts">
const content = ref('');

const isEmpty = computed(() => 
  !content.value?.replace(/<[^>]*>/g, '').trim()
);

const charCount = computed(() =>
  content.value?.replace(/<[^>]*>/g, '').length || 0
);

const isValid = computed(() => charCount.value >= 10);
</script>

<template>
  <QuillEditor v-model="content" />
  <div>
    <span :class="{ 'text-red-600': isEmpty }">
      {{ charCount }} caracteres
    </span>
    <span v-if="!isValid" class="text-red-600">
      Mínimo 10 caracteres requerido
    </span>
  </div>
</template>
```

### 5️⃣ Evitar Errores de SSR

```vue
<script setup lang="ts">
// ✅ Correcto: Usar ClientOnly
</script>

<template>
  <ClientOnly fallback="Cargando editor...">
    <QuillEditor v-model="content" />
  </ClientOnly>
</template>
```

### 6️⃣ Performance: Historial Limitado

```ts
// En QuillEditor.vue - Ya implementado
const history = {
  delay: 1000,
  maxStack: 50,    // Limita el undo/redo
  userOnly: true
}
```

### 7️⃣ TypeScript Avanzado

```vue
<script setup lang="ts">
interface PostContent {
  html: string;
  delta: any;
  text: string;
}

const content = ref<string>('');
const editor = ref<InstanceType<typeof QuillEditor>>();

const getContent = (): PostContent => {
  return editor.value?.getContents() ?? {
    html: '',
    delta: { ops: [] },
    text: ''
  };
};
</script>
```

### 8️⃣ Temas Personalizados

```vue
<style>
/* Tema oscuro */
.dark .ql-toolbar {
  background-color: #1f2937;
  border-color: #374151;
}

.dark .ql-editor {
  background-color: #111827;
  color: #f3f4f6;
}

.dark .ql-editor.ql-blank::before {
  color: #9ca3af;
}
</style>
```

---

## 📚 Resumen de Pasos

| Paso | ✅ Completado |
|------|---|
| 1. Instalación | ✅ `npm install quill` |
| 2. Componente | ✅ `components/QuillEditor.vue` |
| 3. Props & Métodos | ✅ v-model, getContents(), etc |
| 4. Toolbar | ✅ Personalizable y modular |
| 5. Uso | ✅ `<QuillEditor v-model="content" />` |
| 6. SSR Fix | ✅ `<ClientOnly>` |
| 7. Leer datos | ✅ `.getContents()` |
| 8. Renderizar | ✅ `v-html` con sanitización |
| 9. Remover tools | ✅ Editar array de toolbar |
| 10. Resize | ✅ CSS + props |

---

## 🎓 Archivos Relacionados

```
nuxt-site/
├── components/
│   └── QuillEditor.vue          ← Componente reutilizable
├── pages/admin/posts/
│   ├── new.vue                  ← Crear post
│   └── [id].vue                 ← Editar post
└── plugins/
    └── quill.client.ts          ← Registro global (opcional)
```

---

## 🔗 Enlaces Útiles

- [Quill Docs](https://quilljs.com/)
- [Vue Quill](https://github.com/vueup/vue-quill)
- [DOMPurify](https://github.com/cure53/DOMPurify)

---

## ❓ FAQ

**P: ¿Por qué ver "Quill document not found"?**
R: Usa `<ClientOnly>` y asegúrate que Quill se inicializa en `onMounted`.

**P: ¿Cómo agregar más módulos?**
R: Edita `quillModules` en `QuillEditor.vue`.

**P: ¿Es seguro usar `v-html`?**
R: No sin sanitizar. Usa `DOMPurify` o valida en backend.

**P: ¿Cómo cambiar el tema?**
R: Prop `theme="bubble"` o `theme="snow"`.

---

**Creado por:** Senior Vue 3 Developer
**Última actualización:** 2026
**Estado:** ✅ Producción Ready
