<template>
  <div class="demo-form">
    <tiny-form ref="createData" label-width="100px" size="mini" disabled label-position="top">
      <tiny-form-item label="姓名" tip-content="姓名">
        <tiny-input v-model="createData.name"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="数字">
        <tiny-numeric v-model="createData.quantity"></tiny-numeric>
      </tiny-form-item>
      <tiny-form-item label="单选">
        <tiny-radio v-model="createData.sex" label="1">男</tiny-radio>
        <tiny-radio v-model="createData.sex" label="2" text="女"></tiny-radio>
      </tiny-form-item>
      <tiny-form-item label="日期">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="提示">
        <tiny-tooltip effect="light" content="TINY Form Demo" placement="right">
          <tiny-input v-model="createData.input" placeholder="click"></tiny-input>
        </tiny-tooltip>
      </tiny-form-item>
      <tiny-form-item label="文本">
        <tiny-input v-model="createData.textarea" type="textarea" maxlength="15"> </tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="submitClick">提交</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import {
  TinyForm,
  TinyFormItem,
  TinyNumeric,
  TinyRadio,
  TinyDatePicker,
  TinyTooltip,
  TinyInput,
  TinyButton
} from '@opentiny/vue'
import { alert } from '@opentiny/vue-modal'

export default {
  components: {
    TinyForm,
    TinyFormItem,
    TinyNumeric,
    TinyRadio,
    TinyDatePicker,
    TinyTooltip,
    TinyInput,
    TinyButton
  },
  data() {
    return {
      createData: {
        name: '',
        quantity: '',
        sex: '1',
        datepicker: '',
        textarea: '',
        input: ''
      }
    }
  },
  methods: {
    submitClick() {
      alert('提交')
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
