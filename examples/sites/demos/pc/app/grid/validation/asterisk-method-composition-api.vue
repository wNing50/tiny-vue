<template>
  <tiny-grid
    :data="tableData"
    :tooltip-config="{ appendToBody: false, placement: 'right' }"
    :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
    :edit-rules="validRules"
    :valid-config="{ asteriskMethod }"
    show-overflow="tooltip"
  >
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称" :editor="{ component: 'input' }"></tiny-grid-column>
    <tiny-grid-column field="area" title="区域" :editor="{ component: 'input' }"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址" :editor="{ component: 'input' }"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" :editor="{ component: 'input' }"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

const validRules = {
  name: [
    { required: true, message: '名称必填' },
    { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }
  ],
  area: {
    type: 'string',
    required: true,
    validator: (rule, value) => ['华东区', '华南区', '华中区'].includes(value),
    message: '区域格式不正确'
  },
  address: {
    type: 'string',
    validator: (rule, value) =>
      new Promise((resolve, reject) => {
        if (!value) {
          reject(new Error('地址不能为空'))
        } else if (value.length > 10) {
          reject(new Error('地址过长'))
        } else {
          resolve()
        }
      })
  }
}

const tableData = ref([
  {
    id: '1',
    name: 'GFD 科技有限公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWW 科技有限公司',
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    area: '华南区',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '4',
    name: 'TGB 科技有限公司',
    area: '华东区',
    address: '龙岩',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '5',
    name: 'YHN 科技有限公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  }
])

function asteriskMethod({ column }) {
  // name 列不显示必填星号
  return column.property !== 'name'
}
</script>
