<template>
  <tiny-numeric v-model="value" :step="step" :min="min" :max="max" circulate></tiny-numeric>
</template>

<script lang="ts">
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 0,
      step: 2,
      min: 0,
      max: 10
    }
  }
}
</script>
