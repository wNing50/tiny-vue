<template>
  <div class="h-[1500px]">
    <tiny-sticky :z-index="999999" @change="change" @scroll="scroll">
      <tiny-button type="primary">吸顶距离默认0px</tiny-button>
    </tiny-sticky>
  </div>
</template>

<script setup>
import { TinySticky, TinyButton, TinyModal } from '@opentiny/vue'

let isShowNumber = 0

const change = (isFixed) => {
  TinyModal.message({
    message: `触发 change 事件，当前isFixed为：${isFixed}`,
    status: 'info'
  })
}
const scroll = ({ scrollTop, isFixed }) => {
  console.log(`scrollTop：${scrollTop}`, `isFixed：${isFixed}`)
}
</script>
