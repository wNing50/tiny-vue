<template>
  <div class="demo-select">
    <p>场景1：下拉树单选</p>
    <br />
    <tiny-select
      v-model="treeValue1"
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOp"
    ></tiny-select>
    <br /><br />
    <p>场景2：下拉树多选</p>
    <br />
    <tiny-select
      v-model="treeValue2"
      multiple
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOp"
    ></tiny-select>
    <br /><br />
    <p>场景3：下拉树可搜索</p>
    <br />
    <tiny-select
      v-model="treeValue3"
      filterable
      :filter-method="filter"
      clearable
      value-field="id"
      text-field="label"
      render-type="tree"
      :tree-op="treeOp"
    ></tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySelect } from '@opentiny/vue'

const treeValue1 = ref(10)
const treeValue2 = ref([9, 6])
const treeValue3 = ref('')

const treeOp = ref({
  data: [
    {
      id: 1,
      label: '一级 1',
      children: [
        {
          id: 4,
          label: '二级 1-1',
          children: [
            {
              id: 9,
              label: '三级 1-1-1'
            },
            {
              id: 10,
              label: '三级 1-1-2'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: '一级 2',
      children: [
        {
          id: 5,
          label: '二级 2-1'
        },
        {
          id: 6,
          label: '二级 2-2'
        }
      ]
    }
  ]
})

const filter = (value, data) => {
  if (!value) return true

  return data.label.includes(value)
}
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
}
</style>
