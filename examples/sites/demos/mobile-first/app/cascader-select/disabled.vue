<template>
  <div date-tag="tiny-demo">
    <tiny-button @click="showCascader">点击显示级联选择</tiny-button>
    <tiny-cascader-select
      v-model="value"
      :options="optionList"
      :visible="visible"
      @update:visible="visible = $event"
    ></tiny-cascader-select>
  </div>
</template>

<script>
import { TinyCascaderSelect, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyCascaderSelect,
    TinyButton
  },
  data() {
    return {
      visible: false,
      value: [2022, 1, 31],
      optionList: [
        { range: [2000, 2050], optionMethod: this.getYear },
        { range: [1, 12], optionMethod: this.getMonth },
        { rangeMethod: this.rangeDate, optionMethod: this.getDate }
      ]
    }
  },
  methods: {
    getYear(year, focusYear, focusMonth, focusDate) {
      return { id: year, label: `${year}年` }
    },
    getMonth(month, focusYear, focusMonth, focusDate) {
      return { id: month, label: `${month}月` }
    },
    getDate(date, focusYear, focusMonth, focusDate) {
      // 禁用日期 2022-1-30 的 date 选项
      const disabled = focusYear === 2022 && focusMonth === 1 && date === 30

      return { id: date, label: `${date}日`, disabled }
    },
    rangeDate(focusYear, focusMonth, focusDate) {
      const range = [1]

      if (focusMonth === 2) {
        const isLeap = (focusYear % 4 === 0 && focusYear % 100 !== 0) || focusYear % 400 === 0

        range.push(isLeap ? 29 : 28)
      } else {
        range.push(~[1, 3, 5, 7, 8, 10, 12].indexOf(focusMonth) ? 31 : 30)
      }

      return range
    },
    showCascader() {
      this.visible = true
    }
  }
}
</script>
