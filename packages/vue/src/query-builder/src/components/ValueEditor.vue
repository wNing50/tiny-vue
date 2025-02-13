<template>
  <div v-if="!show" class="hide"></div>
  <span
    v-else-if="['text', 'select'].includes(type) && ['between', 'notBetween'].includes(operator)"
    :data-testid="testID"
    :class="className + ' rule-value-editor'"
    :title="title"
  >
    <div v-for="(key, i) in ['from', 'to']" :key="i">
      <custom-input
        v-if="type === 'text'"
        :type="allProps.inputTypeCoerced"
        :value="modelValue[key]"
        :schema="schema"
        :props="{
          key,
          placeholder: allProps.placeHolderText,
          class: standardClassnames.valueListItem,
          disabled
        }"
        :events="{
          change: change1(i)
        }"
      ></custom-input>
      <component
        v-else
        :is="allProps.SelectorComponent"
        :key="key"
        v-bind="otherProps"
        :class="standardClassnames.valueListItem"
        :disabled="disabled"
        :bind-props="(schema.bindProps && schema.bindProps.select) || {}"
      ></component>
      <component v-if="i === 0" :is="separator"></component>
    </div>
  </span>

  <component
    v-else-if="['select', 'multiselect'].includes(type)"
    :is="allProps.SelectorComponent"
    v-bind="allProps.props"
    :test-i-d="testID"
    :class-name="className"
    :title="title"
    :handle-on-change="handleOnChange"
    :disabled="disabled"
    :value="value"
    :options="values"
    :multiple="type === 'multiselect'"
    :lists-as-arrays="listsAsArrays"
    :bind-props="(schema.bindProps && schema.bindProps.select) || {}"
  ></component>

  <span v-else-if="type === 'radio'" :data-testid="testID" :class="className + ' rule-radio'" :title="title">
    <custom-input
      v-for="(v, key) in values"
      :key="key"
      :type="type"
      :value="value"
      :schema="schema"
      :props="{
        label: v.name,
        text: v.label,
        disabled
      }"
      :events="{ change }"
    ></custom-input>
  </span>
  <span v-else-if="type === 'custom' && allProps.fieldData.component">
    <div v-if="['between', 'notBetween'].includes(operator)">
      <div v-for="(key, i) in ['from', 'to']" :key="key">
        <component
          :is="allProps.fieldData.component"
          v-bind="getProps(allProps.fieldData)"
          :data-id="id"
          :field-name="field"
          :modelValue="value[i]"
          :key="key"
          @update:modelValue="change"
          @change="change"
          :operator="operator"
          :path="path"
        >
        </component>
      </div>
    </div>
    <component
      v-else
      :is="allProps.fieldData.component"
      v-bind="getProps(allProps.fieldData)"
      :data-id="id"
      :field-name="field"
      :modelValue="value"
      @update:modelValue="change"
      @change="change"
      :operator="operator"
      :path="path"
    >
    </component>
  </span>

  <span v-else class="rule-value-editor">
    <custom-input
      :type="allProps.inputTypeCoerced"
      :value="type === 'checkbox' ? !!value : value"
      :schema="schema"
      :props="{
        'data-testid': testID,
        placeholder: allProps.placeHolderText,
        title,
        class: className,
        disabled
      }"
      :events="{ change }"
    ></custom-input>
  </span>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import { standardClassnames } from '../defaults'
import { getFirstOption, parseNumber } from '../utils'
import { useValueEditor } from '../hooks'
import ValueSelector from './ValueSelector.vue'
import Input from './input.vue'

export default defineComponent({
  components: {
    CustomInput: Input
  },
  props: {
    field: String,
    id: String,
    operator: String,
    value: {},
    valueSource: {},
    fieldData: {},
    type: {
      type: String,
      default: 'text'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    values: {
      type: Array,
      default: () => []
    },
    listsAsArrays: {},
    parseNumbers: {},
    separator: {},
    selectorComponent: {},
    skipHook: {},
    handleOnChange: {},
    className: {},
    path: {},
    level: {},
    title: {},
    disabled: {},
    context: {},
    validation: {},
    testID: {},
    schema: {}
  }, // :ValueEditorProps
  setup(props) {
    const getProps = (options) => {
      return options.props || {}
    }
    return {
      standardClassnames,
      getFirstOption,
      parseNumber,
      modelValue: {
        from: '',
        to: ''
      },
      getProps
    }
  },
  computed: {
    allProps() {
      const {
        operator,
        value,
        handleOnChange,
        title,
        className,
        type = 'text',
        inputType = 'text',
        values = [],
        listsAsArrays,
        parseNumbers,
        fieldData,
        disabled,
        separator = null,
        skipHook = false,
        testID,
        selectorComponent: SelectorComponent = ValueSelector,
        ...props
      } = this.$props
      const { valueAsArray, multiValueHandler } = useValueEditor({
        skipHook,
        handleOnChange,
        inputType,
        operator,
        value,
        type,
        listsAsArrays,
        parseNumbers,
        values
      })
      const placeHolderText = fieldData?.placeholder ?? ''
      const inputTypeCoerced = ['textarea', 'switch', 'checkbox'].includes(type)
        ? type
        : ['in', 'notIn'].includes(operator)
          ? 'text'
          : inputType || 'text'

      if (Array.isArray(valueAsArray)) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.modelValue.from = valueAsArray[0]
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.modelValue.to = valueAsArray[1]
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.modelValue.from = ''
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.modelValue.to = ''
      }
      return {
        operator,
        value,
        handleOnChange,
        title,
        className,
        type,
        inputType,
        values,
        listsAsArrays,
        parseNumbers,
        fieldData,
        disabled,
        separator,
        skipHook,
        testID,
        SelectorComponent,
        props,
        multiValueHandler,
        placeHolderText,
        inputTypeCoerced
      }
    },
    show() {
      return !['null', 'notNull'].includes(this.operator)
    }
  },
  methods: {
    change(e: any) {
      if (['textarea', 'radio'].includes(this.type)) {
        return this.handleOnChange(e?.target?.value || e)
      }

      return this.handleOnChange(parseNumber(e?.target?.value || e, { parseNumbers: this.parseNumbers }))
    },
    change1(i: number) {
      return (e: any) => this.allProps.multiValueHandler(e?.target?.value || e, i)
    }
  }
})
</script>
