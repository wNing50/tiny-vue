<template>
  <tiny-logout :redirect-url="url"></tiny-logout>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyLogout } from '@opentiny/vue'

const url = ref('#/webnova/zh-CN/component/logout')
</script>
