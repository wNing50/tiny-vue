<template>
  <div>
    是否显示自定义告警组件：<tiny-switch v-model="show"></tiny-switch>
    <tiny-alert description="自定义告警组件" v-show="show" :closable="false">
      <template #close>
        <tiny-icon-close-circle @click="show = !show"></tiny-icon-close-circle>
      </template>
    </tiny-alert>
    <tiny-alert type="error" description="关闭按钮自定义文本" close-text="关闭"></tiny-alert>
    <tiny-alert type="warning" description="自定义的 close 事件" @close="close"></tiny-alert>
    <tiny-alert :closable="false" description="closable 设置为 false, 不可关闭"></tiny-alert>
  </div>
</template>

<script>
import { TinyAlert, TinyNotify, TinySwitch } from '@opentiny/vue'
import { iconCloseCircle } from '@opentiny/vue-icon'

export default {
  components: {
    TinyAlert,
    TinySwitch,
    TinyIconCloseCircle: iconCloseCircle()
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    close() {
      TinyNotify({
        type: 'success',
        message: '触发关闭事件',
        position: 'top-right',
        duration: 10000
      })
    }
  }
}
</script>
