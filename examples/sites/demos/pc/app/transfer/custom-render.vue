<template>
  <div>
    <header>字段映射</header>
    <tiny-transfer v-model="value" :data="data" :props="{ key: 'id', label: 'text' }"></tiny-transfer>
    <header>使用插槽</header>
    <tiny-transfer v-model="value" :data="data" :props="{ key: 'id', label: 'text' }">
      <template #default="optionData">
        <div>
          <span class="red">{{ optionData.option.id }}</span> <span>- {{ optionData.option.text }} - by slot</span>
        </div>
      </template>
    </tiny-transfer>
    <header>自定义渲染</header>
    <tiny-transfer
      v-model="value"
      :data="data"
      :props="{ key: 'id', label: 'text' }"
      :render-content="renderDataItem"
    ></tiny-transfer>
  </div>
</template>

<script lang="jsx">
import { TinyTransfer } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer
  },
  data() {
    const generateData = () => {
      const data = []

      for (let i = 0; i <= 15; i++) {
        data.push({
          id: i,
          text: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }

      return data
    }

    return {
      data: generateData(),
      value: [1, 4]
    }
  },
  methods: {
    renderDataItem(h, option) {
      return (
        <span>
          <span class="red">{option.id}</span> - {option.text} - by jsx
        </span>
      )
    }
  }
}
</script>

<style scoped>
header {
  margin: 12px 0;
}
:deep(.red) {
  font-weight: bold;
  color: red;
}
</style>
