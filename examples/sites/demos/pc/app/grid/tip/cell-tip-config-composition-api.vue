<template>
  <tiny-grid
    :tooltip-config="{
      placement: 'top',
      visibleArrow: true,
      enterable: true,
      effect: 'light',
      contentMethod
    }"
    :data="tableData"
  >
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column
      field="name"
      title="公司名称公司名称公司名称公司名称公司名称公司名称公司名称公司名称公司名称公司名称公司名称公司名称"
      show-header-overflow="tooltip"
      show-tip
    ></tiny-grid-column>
    <tiny-grid-column field="address" title="地址" show-overflow="title"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期" show-overflow="tooltip"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市文字" show-overflow="ellipsis"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    name: 'GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司',
    city: '福州 福州 福州 福州 福州 福州 福州 福州 福州 福州',
    address: '中国广东省深圳龙岗区 SZ 单身公寓',
    createdDate: '2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00'
  },
  {
    id: '2',
    name: 'WWW 科技 YX 公司',
    city: '深圳',
    address: '深圳福田区',
    createdDate: '2016-07-08 12:36:22'
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    city: '中山',
    address: '深圳福田区',
    createdDate: '2014-02-14 14:14:14'
  },
  {
    id: '4',
    name: 'TGB 科技 YX 公司',
    city: '龙岩',
    address: '深圳福田区',
    createdDate: '2013-01-13 13:13:13'
  },
  {
    id: '5',
    name: 'YHN 科技 YX 公司',
    city: '韶关',
    address: '深圳福田区',
    createdDate: '2012-12-12 12:12:12'
  },
  {
    id: '6',
    name: 'WSX 科技 YX 公司',
    city: '黄冈',
    address: '深圳福田区',
    createdDate: '2011-11-11 11:11:11'
  },
  {
    id: '7',
    name: 'KBG 物业 YX 公司',
    city: '赤壁',
    address: '深圳福田区',
    createdDate: '2016-04-30 23:56:00'
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术 YX 公司',
    city: '厦门',
    address: '深圳福田区',
    createdDate: '2016-06-03 13:53:25'
  }
])

function contentMethod({ row, column, isHeader, content }) {
  // 自定义表格 tip 提示，既支持字符串也支持 jsx 或者 h 函数写法
  return isHeader ? (
    content
  ) : (
    <div style="color:red;">
      自定义提示：{row[column.property]}-----{column.property}
    </div>
  )
}
</script>
