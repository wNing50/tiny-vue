<template>
  <div class="demo-input">
    <tiny-input v-model="input" counter :maxlength="10" :minlength="5"></tiny-input>
  </div>
</template>

<script>
import { TinyInput } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyInput
  },
  data() {
    return {
      input: '测试长度'
    }
  }
}
</script>

<style scoped>
.demo-input {
  padding-top: 20px;
  height: 100%;
  background: #f5f5f5;
}
</style>
