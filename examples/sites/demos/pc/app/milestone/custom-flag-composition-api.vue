<template>
  <div class="demo-milestone">
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap">
      <template #flag="data">
        <span style="font-size: 12px">{{ data.slotScope.content }}</span>
      </template>
    </tiny-milestone>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyMilestone } from '@opentiny/vue'

const statusMap = ref({
  completed: '#f0f7ff',
  doing: '#e8faff',
  back: '#edf7df',
  end: '#faad14',
  cancel: '#f230301A'
})
const milestoneData = ref([
  {
    name: 'POR1',
    time: '2018-9-7',
    status: 'completed',
    flags: [
      {
        status: 'completed',
        name: 'test1',
        content: '已完成'
      }
    ]
  },
  {
    name: 'POR2',
    time: '2018-9-8',
    status: 'completed',
    flags: [
      {
        status: 'back',
        content: '引导用户按照流程完成任务'
      }
    ]
  },
  { name: 'POR3', time: '2018-9-10', status: 'doing', content: null },
  {
    name: 'POR4',
    time: '2018-9-9',
    status: 'cancel',
    flags: [
      {
        status: 'back',
        content: '欢迎使用vui',
        name: 'test7'
      },
      {
        status: 'doing',
        content: 'test8'
      }
    ]
  },
  { name: 'POR5', time: '2018-9-11', status: 'back' },
  {
    name: 'POR6',
    time: '2018-9-9',
    status: 'end',
    flags: [
      {
        status: 'completed',
        content: 'test6'
      }
    ]
  }
])
</script>

<style scoped>
.demo-milestone ::v-deep .tiny-milestone__description-status {
  margin-top: 4px;
}
</style>
