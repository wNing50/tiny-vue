<template>
  <div class="demo-autocomplete">
    <div class="loading-icon">
      <div>默认有加载图标：</div>
      <tiny-autocomplete v-model="value" placeholder="请输入内容" :fetch-suggestions="querySearch"></tiny-autocomplete>
    </div>
    <div class="loading-icon_hide">
      <div>隐藏加载图标：</div>
      <tiny-autocomplete
        v-model="value"
        hide-loading
        placeholder="请输入内容"
        :fetch-suggestions="querySearch"
      ></tiny-autocomplete>
    </div>
  </div>
</template>

<script>
import { TinyAutocomplete } from '@opentiny/vue'

export default {
  components: {
    TinyAutocomplete
  },
  data() {
    return {
      list: [],
      value: ''
    }
  },
  methods: {
    async querySearch(queryString, cb) {
      let list = this.list
      let res = queryString ? list.filter(this.createFilter(queryString)) : list

      // 为了演示加载图标的效果，增加 1s 的延时
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // 返回建议列表的数据
      cb(res)
    },
    createFilter(queryString) {
      return (listItem) => listItem.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    },
    loadAll() {
      return [
        {
          value: 'GFD 科技公司',
          address: '福州'
        },
        {
          value: 'WWWW 科技公司',
          address: '深圳福田区'
        },
        {
          value: 'RFV 有限责任公司',
          address: '中山市'
        },
        {
          value: 'TGB 公司',
          address: '梅州'
        },
        {
          value: 'YHN 科技公司',
          address: '韶关'
        },
        {
          value: '康康物业公司',
          address: '广州天河区'
        }
      ]
    }
  },
  mounted() {
    this.list = this.loadAll()
  }
}
</script>

<style scoped>
.demo-autocomplete .tiny-autocomplete {
  display: flex;
  width: 270px;
}

.demo-autocomplete > * > :not(:last-child) {
  margin-bottom: 12px;
}

.loading-icon {
  margin-bottom: 12px;
}
</style>
