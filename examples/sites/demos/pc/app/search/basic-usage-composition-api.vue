<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键词" :maxlength="10"></tiny-search>
    <div class="mt10">当前搜索值为：{{ value }}</div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySearch } from '@opentiny/vue'

const value = ref('默认值')
</script>
