<template>
  <tiny-pop-upload :action="action" :limit="2" multiple></tiny-pop-upload>
</template>

<script lang="jsx">
import { TinyPopUpload } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
