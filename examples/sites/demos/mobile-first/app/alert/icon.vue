<template>
  <div>
    <tiny-alert :icon="IconBoat" description="自定义图标"></tiny-alert>
    <tiny-alert description="默认图标"></tiny-alert>
    <tiny-alert type="success" description="type 为 success 的默认图标"></tiny-alert>
    <tiny-alert type="warning" description="type 为 warning 的默认图标"></tiny-alert>
    <tiny-alert type="error" description="type 为 error 的默认图标"></tiny-alert>
  </div>
</template>

<script>
import { TinyAlert } from '@opentiny/vue'
import { IconBoat } from '@opentiny/vue-icon'

export default {
  components: {
    TinyAlert
  },
  data() {
    return {
      IconBoat: IconBoat()
    }
  }
}
</script>
