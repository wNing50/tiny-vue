<template>
  <tiny-rich-text-editor :collaboration="collaboration"></tiny-rich-text-editor>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyRichTextEditor } from '@opentiny/vue'

const collaboration = ref(true)
</script>
