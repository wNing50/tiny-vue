<template>
  <div>
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <tiny-amount v-model="value" :disabled="disabled"></tiny-amount>
  </div>
</template>

<script lang="jsx">
import { TinyAmount, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyAmount,
    TinyButton
  },
  data() {
    return {
      value: 88.88,
      disabled: false
    }
  },
  methods: {
    Switchover() {
      this.disabled = !this.disabled
    }
  }
}
</script>
