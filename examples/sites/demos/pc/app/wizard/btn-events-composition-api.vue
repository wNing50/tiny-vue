<template>
  <tiny-wizard
    :data="dataSet"
    page-guide
    @btn-prev="handlePrev"
    @btn-next="handleNext"
    @btn-save="handleSave"
    @btn-submit="handleSubmit"
  ></tiny-wizard>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyWizard, TinyModal } from '@opentiny/vue'

const dataSet = ref([
  {
    name: '出差信息填写',
    status: 'ready'
  },
  {
    name: '项目信息填写',
    status: 'doing'
  },
  {
    name: '主管审批',
    status: 'wait'
  },
  {
    name: '权签人审批',
    status: 'wait'
  },
  {
    name: '完成申请',
    status: 'wait'
  }
])

const handlePrev = (datas) => {
  TinyModal.message('btn-prev' + JSON.stringify(datas))
}

const handleNext = (datas) => {
  TinyModal.message('btn-next' + JSON.stringify(datas))
}

const handleSave = (datas) => {
  TinyModal.message('btn-save' + JSON.stringify(datas))
}

const handleSubmit = (datas) => {
  TinyModal.message('btn-submit' + JSON.stringify(datas))
}
</script>
