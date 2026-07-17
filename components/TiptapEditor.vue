<template>
  <div class="border border-outline-variant rounded-xl overflow-hidden bg-white">
    <div v-if="editor" class="flex flex-wrap items-center gap-1 p-2 border-b border-outline-variant bg-surface-container-low">
      <!-- Bold -->
      <button 
        type="button"
        @click="editor.chain().focus().toggleBold().run()" 
        :class="{ 'bg-primary text-white': editor.isActive('bold'), 'text-on-surface hover:bg-surface-container-high': !editor.isActive('bold') }"
        class="w-8 h-8 rounded flex items-center justify-center transition-colors"
        title="Bold"
      >
        <span class="material-symbols-outlined text-sm font-bold">format_bold</span>
      </button>

      <!-- Italic -->
      <button 
        type="button"
        @click="editor.chain().focus().toggleItalic().run()" 
        :class="{ 'bg-primary text-white': editor.isActive('italic'), 'text-on-surface hover:bg-surface-container-high': !editor.isActive('italic') }"
        class="w-8 h-8 rounded flex items-center justify-center transition-colors"
        title="Italic"
      >
        <span class="material-symbols-outlined text-sm">format_italic</span>
      </button>

      <!-- Strike -->
      <button 
        type="button"
        @click="editor.chain().focus().toggleStrike().run()" 
        :class="{ 'bg-primary text-white': editor.isActive('strike'), 'text-on-surface hover:bg-surface-container-high': !editor.isActive('strike') }"
        class="w-8 h-8 rounded flex items-center justify-center transition-colors"
        title="Strikethrough"
      >
        <span class="material-symbols-outlined text-sm">strikethrough_s</span>
      </button>

      <div class="w-px h-6 bg-outline-variant mx-1"></div>

      <!-- Heading 2 -->
      <button 
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" 
        :class="{ 'bg-primary text-white': editor.isActive('heading', { level: 2 }), 'text-on-surface hover:bg-surface-container-high': !editor.isActive('heading', { level: 2 }) }"
        class="w-8 h-8 rounded flex items-center justify-center transition-colors font-bold text-sm"
        title="Heading 2"
      >
        H2
      </button>

      <!-- Heading 3 -->
      <button 
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" 
        :class="{ 'bg-primary text-white': editor.isActive('heading', { level: 3 }), 'text-on-surface hover:bg-surface-container-high': !editor.isActive('heading', { level: 3 }) }"
        class="w-8 h-8 rounded flex items-center justify-center transition-colors font-bold text-sm"
        title="Heading 3"
      >
        H3
      </button>

      <!-- Paragraph -->
      <button 
        type="button"
        @click="editor.chain().focus().setParagraph().run()" 
        :class="{ 'bg-primary text-white': editor.isActive('paragraph'), 'text-on-surface hover:bg-surface-container-high': !editor.isActive('paragraph') }"
        class="w-8 h-8 rounded flex items-center justify-center transition-colors"
        title="Paragraph"
      >
        <span class="material-symbols-outlined text-sm">notes</span>
      </button>

      <div class="w-px h-6 bg-outline-variant mx-1"></div>

      <!-- Bullet List -->
      <button 
        type="button"
        @click="editor.chain().focus().toggleBulletList().run()" 
        :class="{ 'bg-primary text-white': editor.isActive('bulletList'), 'text-on-surface hover:bg-surface-container-high': !editor.isActive('bulletList') }"
        class="w-8 h-8 rounded flex items-center justify-center transition-colors"
        title="Bullet List"
      >
        <span class="material-symbols-outlined text-sm">format_list_bulleted</span>
      </button>

      <!-- Ordered List -->
      <button 
        type="button"
        @click="editor.chain().focus().toggleOrderedList().run()" 
        :class="{ 'bg-primary text-white': editor.isActive('orderedList'), 'text-on-surface hover:bg-surface-container-high': !editor.isActive('orderedList') }"
        class="w-8 h-8 rounded flex items-center justify-center transition-colors"
        title="Ordered List"
      >
        <span class="material-symbols-outlined text-sm">format_list_numbered</span>
      </button>

      <!-- Blockquote -->
      <button 
        type="button"
        @click="editor.chain().focus().toggleBlockquote().run()" 
        :class="{ 'bg-primary text-white': editor.isActive('blockquote'), 'text-on-surface hover:bg-surface-container-high': !editor.isActive('blockquote') }"
        class="w-8 h-8 rounded flex items-center justify-center transition-colors"
        title="Quote"
      >
        <span class="material-symbols-outlined text-sm">format_quote</span>
      </button>

      <div class="w-px h-6 bg-outline-variant mx-1"></div>

      <!-- Undo -->
      <button 
        type="button"
        @click="editor.chain().focus().undo().run()" 
        :disabled="!editor.can().undo()"
        class="w-8 h-8 rounded flex items-center justify-center text-on-surface hover:bg-surface-container-high disabled:opacity-30 transition-colors"
        title="Undo"
      >
        <span class="material-symbols-outlined text-sm">undo</span>
      </button>

      <!-- Redo -->
      <button 
        type="button"
        @click="editor.chain().focus().redo().run()" 
        :disabled="!editor.can().redo()"
        class="w-8 h-8 rounded flex items-center justify-center text-on-surface hover:bg-surface-container-high disabled:opacity-30 transition-colors"
        title="Redo"
      >
        <span class="material-symbols-outlined text-sm">redo</span>
      </button>
    </div>

    <!-- Editor Content -->
    <div class="p-4 min-h-[300px] prose prose-sm max-w-none focus:outline-none focus:ring-0">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
  ],
  editorProps: {
    attributes: {
      class: 'focus:outline-none min-h-[300px]',
    },
  },
  onUpdate: () => {
    emit('update:modelValue', editor.value.getHTML())
  },
})

watch(() => props.modelValue, (value) => {
  const isSame = editor.value.getHTML() === value
  if (!isSame) {
    editor.value.commands.setContent(value, false)
  }
})

onBeforeUnmount(() => {
  editor.value.destroy()
})
</script>

<style>
/* Basic prose styles for tiptap editor inside */
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}
.ProseMirror h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
}
.ProseMirror h3 {
  font-size: 1.17em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
}
.ProseMirror ul {
  list-style-type: disc;
  padding-left: 1.5em;
  margin-bottom: 1em;
}
.ProseMirror ol {
  list-style-type: decimal;
  padding-left: 1.5em;
  margin-bottom: 1em;
}
.ProseMirror blockquote {
  border-left: 3px solid #e2e8f0;
  padding-left: 1rem;
  font-style: italic;
  color: #64748b;
}
</style>
