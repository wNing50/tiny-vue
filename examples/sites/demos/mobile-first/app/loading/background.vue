<template>
  <div id="boxtwo"></div>
</template>

<script>
import { TinyLoading } from '@opentiny/vue'

export default {
  mounted() {
    TinyLoading.service({
      text: '自定义背景颜色和透明度',
      target: document.getElementById('boxtwo'),
      background: 'rgba(0, 0, 0, 0.3)',
      tiny_mode: 'mobile-first'
    })
  }
}
</script>

<style scoped>
#boxtwo {
  height: 120px;
}
</style>
