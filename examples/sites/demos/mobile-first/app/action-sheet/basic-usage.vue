<template>
  <div>
    <tiny-button @click="fn" type="primary"> 动作面板 </tiny-button>
    <tiny-action-sheet title="标题" :visible="boxVisibility" @update:visible="boxVisibility = $event">
      <div style="text-align: center">
        <p v-for="i in 20" style="height: 50px" :key="i">内容选项 {{ i }}</p>
      </div>
    </tiny-action-sheet>
  </div>
</template>

<script>
import { TinyActionSheet, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyActionSheet,
    TinyButton
  },
  data() {
    return {
      boxVisibility: false
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
