<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      :auto-crop-area="0.5"
    ></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyCrop } from '@opentiny/vue'

export default {
  components: {
    TinyCrop,
    TinyButton
  },
  data() {
    return {
      visible: false,
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
    }
  }
}
</script>
