<template>
  <div class="quill-editor-wrapper">
    <!-- Editor Container -->
    <div 
      ref="editorContainer"
      class="quill-editor-container"
      :style="{ minHeight: minHeight }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

interface Props {
  modelValue?: string
  placeholder?: string
  minHeight?: string
  readOnly?: boolean
  toolbar?: (string | Record<string, any>)[][]
  theme?: 'snow' | 'bubble'
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'text-change', delta: any, source: string): void
  (e: 'selection-change', range: any, oldRange: any, source: string): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Escribe aquí...',
  minHeight: '400px',
  readOnly: false,
  theme: 'snow'
})

const emit = defineEmits<Emits>()

// Refs
const editorContainer = ref<HTMLDivElement | null>(null)
let quillInstance: Quill | null = null
let isInitializing = true

/**
 * PASO 4: Toolbar predeterminada
 * Fácil de personalizar o remover opciones
 */
const defaultToolbar = computed(() => 
  props.toolbar || [
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
)

/**
 * PASO 2: Inicializar Quill en onMounted
 * Solo en cliente, después de que el DOM esté listo
 */
onMounted(() => {
  if (!editorContainer.value) return

  try {
    quillInstance = new Quill(editorContainer.value, {
      theme: props.theme,
      placeholder: props.placeholder,
      readOnly: props.readOnly,
      modules: {
        toolbar: defaultToolbar.value,
        clipboard: {
          matchVisual: false
        },
        history: {
          delay: 1000,
          maxStack: 50,
          userOnly: true
        }
      }
    })

    // Establecer contenido inicial
    if (props.modelValue && props.modelValue.trim()) {
      quillInstance.root.innerHTML = props.modelValue
    }

    // Listener para cambios de texto
    quillInstance.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user' && !isInitializing) {
        const html = quillInstance!.root.innerHTML
        emit('update:modelValue', html)
        emit('text-change', delta, source)
      }
    })

    // Listener para cambios de selección
    quillInstance.on('selection-change', (range, oldRange, source) => {
      emit('selection-change', range, oldRange, source)
    })

    isInitializing = false
  } catch (error) {
    console.error('Error inicializando Quill:', error)
  }
})

/**
 * PASO 6: Limpiar instancia al desmontar
 */
onBeforeUnmount(() => {
  if (quillInstance) {
    quillInstance.disable()
    quillInstance = null
  }
})

/**
 * Watch para cambios externos del modelValue
 */
watch(
  () => props.modelValue,
  (newValue) => {
    if (quillInstance && newValue !== quillInstance.root.innerHTML) {
      quillInstance.root.innerHTML = newValue
    }
  }
)

/**
 * PASO 7: Método para obtener contenido
 */
const getContents = () => {
  if (!quillInstance) return null
  return {
    html: quillInstance.root.innerHTML,
    delta: quillInstance.getContents(),
    text: quillInstance.getText()
  }
}

/**
 * Método para establecer contenido
 */
const setContents = (html: string) => {
  if (quillInstance) {
    quillInstance.root.innerHTML = html
  }
}

/**
 * Método para enfocar
 */
const focus = () => {
  if (quillInstance) {
    quillInstance.focus()
  }
}

/**
 * Método para obtener instancia de Quill
 */
const getInstance = () => quillInstance

// Exponer métodos
defineExpose({
  getContents,
  setContents,
  focus,
  getInstance
})
</script>

<style scoped>
.quill-editor-wrapper {
  width: 100%;
}

.quill-editor-container {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
}

/* Override estilos de Quill para mejor apariencia */
:deep(.ql-container) {
  font-size: 1rem;
  font-family: inherit;
  border: none;
  border-top: 1px solid #e5e7eb;
}

:deep(.ql-editor) {
  min-height: inherit;
  padding: 1rem;
  line-height: 1.6;
  background-color: #ffffff;
}

:deep(.ql-editor.ql-blank::before) {
  color: #9ca3af;
  font-style: italic;
}

:deep(.ql-toolbar) {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.75rem;
}

:deep(.ql-toolbar.ql-snow .ql-formats) {
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}

:deep(.ql-toolbar.ql-snow .ql-stroke) {
  stroke: #6b7280;
}

:deep(.ql-toolbar.ql-snow .ql-fill) {
  fill: #6b7280;
}

:deep(.ql-toolbar.ql-snow .ql-picker-label) {
  color: #6b7280;
}

:deep(.ql-toolbar.ql-snow button:hover) {
  color: #1f2937;
}

:deep(.ql-toolbar.ql-snow button.ql-active) {
  color: #2563eb;
}

:deep(.ql-toolbar.ql-snow button.ql-active .ql-stroke) {
  stroke: #2563eb;
}

:deep(.ql-toolbar.ql-snow button.ql-active .ql-fill) {
  fill: #2563eb;
}

/* Hover en botones */
:deep(.ql-toolbar.ql-snow .ql-stroke:hover) {
  stroke: #1f2937;
}

:deep(.ql-toolbar.ql-snow .ql-fill:hover) {
  fill: #1f2937;
}
</style>
