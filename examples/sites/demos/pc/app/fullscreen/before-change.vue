<template>
  <div class="tiny-fullscreen-demo">
    <div class="demo-fullscreen">
      <label class="checkbox">
        <input v-model="pageOnly" type="checkbox" name="button" />
        pageOnly
      </label>
      <label class="checkbox">
        <input v-model="teleport" type="checkbox" name="button" />
        teleport
      </label>
    </div>
    <tiny-fullscreen
      :teleport="teleport"
      :page-only="pageOnly"
      :z-index="999"
      :fullscreen="fullscreen"
      :before-change="beforeChange"
      @update:fullscreen="fullscreen = $event"
    >
      <div
        class="tiny-fullscreen-wrapper"
        style="
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #333;
        "
      >
        <button type="button" @click="toggle">
          {{ fullscreen ? 'Exit Fullscreen' : 'Request Fullscreen' }}
        </button>
        <img :src="imgUrl" />
      </div>
    </tiny-fullscreen>
  </div>
</template>

<script>
import { TinyFullscreen, TinyModal } from '@opentiny/vue'

export default {
  name: 'ComponentExample',
  components: {
    TinyFullscreen
  },
  data() {
    return {
      teleport: true,
      fullscreen: false,
      pageOnly: false,
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/8.jpg`
    }
  },
  methods: {
    beforeChange(done) {
      TinyModal.message(
        '全屏切换功能已被拦截，必须调用 done 方法才能执行全屏状态的切换，2s 后将自动调用 done 方法切换全屏状态'
      )
      setTimeout(done, 2000)
    },
    toggle() {
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>

<style scoped>
.demo-fullscreen {
  margin-bottom: 8px;
}
</style>
