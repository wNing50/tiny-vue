<template>
  <tiny-checkbox-group v-model="checkboxGroup" vertical text-color="#fff">
    <tiny-checkbox v-for="city in cities" :label="city" :key="city">
      {{ city }}
    </tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script>
import { TinyCheckboxGroup, TinyCheckbox } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxGroup,
    TinyCheckbox
  },
  data() {
    return {
      checkboxGroup: ['上海'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  }
}
</script>
