<template>
  <div>
    <tiny-button @click="boxVisibility = true">无遮罩</tiny-button>
    <tiny-dialog-box :modal="false" v-model:visible="boxVisibility" title="消息" width="30%">
      <span>不显示灰色遮罩层</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyDialogBox } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyDialogBox
  },
  data() {
    return {
      boxVisibility: false
    }
  }
}
</script>
