<template>
  <div>
    <tiny-button @click="choose">选择币种</tiny-button>
    <tiny-currency
      v-model="value"
      :visible="visible"
      @update:visible="visible = $event"
      placeholder="请选择"
      multiple
    ></tiny-currency>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script>
import { TinyCurrency, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency,
    TinyButton
  },
  data() {
    return {
      visible: false,
      value: ['VUV', 'CNY']
    }
  },
  methods: {
    choose() {
      this.visible = true
    }
  }
}
</script>
