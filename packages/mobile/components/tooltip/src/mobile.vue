<!-- eslint-disable no-mixed-operators -->
<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->

<script lang="tsx">
import { renderless, api } from './renderless/vue'
import {
  $prefix,
  setup,
  createComponent,
  parseVnode,
  h,
  defineComponent,
  isEmptyVnode,
  hooks
} from '../../../vue-common'
import type { ITooltipApi, ITinyVm } from './tooltip'
import { tooltipProps } from './tooltip'

export default defineComponent({
  name: $prefix + 'Tooltip',
  componentName: 'Tooltip',
  props: tooltipProps,
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ITooltipApi
  },
  render() {
    const getContent = (vm: ITinyVm<never>) => {
      let slotContent = vm.slots.content && vm.slots.content()

      if (slotContent && (!hooks.Comment || slotContent[0].type !== hooks.Comment)) {
        return slotContent
      }

      let attrContent: any

      if (vm.renderContent) {
        attrContent = vm.renderContent(h, vm.content)
      } else if (vm.pre) {
        attrContent = vm.content ? h('pre', vm.content) : null
      } else {
        attrContent = vm.content
      }

      return attrContent
    }
    if (!Object.prototype.hasOwnProperty.call(this, 'popperVM')) {
      let popperVM = createComponent({
        el: document.createElement('div'),
        propsData: null,
        component: {
          render: () => {
            const content = getContent(this)
            const propsData = {
              attrs: { name: this.transition },
              on: { 'after-leave': this.doDestroy }
            }
            const typeClass = 'is-' + (this.type || this.effect || 'dark')
            const mouseenter = () => this.setExpectedState(true)
            const mouseleave = () => {
              this.setExpectedState(false)
              this.debounceClose()
            }

            // 直接 updatePopper 会造成scroll事件的绑定，即使tooltip不显示，也在滚动时带来性能影响
            this.$nextTick(() => {
              // 取 v-show的条件， v-show时，要更新一下位置
              if (!this.disabled && this.state.showPopper && content) {
                this.updatePopper()
              }
            })

            return h('transition', propsData, [
              <div
                ref="popper"
                id={this.state.tooltipId}
                v-show={!this.disabled && this.state.showPopper && content}
                class={[
                  'tiny-tooltip',
                  'tiny-tooltip__popper',
                  typeClass,
                  this.popperClass,
                  { 'tiny-tooltip__show-tips': this.state.showContent }
                ]}
                style={`max-width:${this.state.tipsMaxWidth}px`}
                role="tooltip"
                aria-hidden={this.disabled || !this.state.showPopper ? 'true' : 'false'}
                onMouseenter={() => mouseenter()}
                onMouseleave={() => mouseleave()}>
                {content}
              </div>
            ])
          }
        }
      })

      this.d({ popperVM: { get: () => popperVM, set: (v) => (popperVM = v) } })
    }
    const stringifyClassObj = (classObj: Record<string, string>) =>
      Object.keys(classObj)
        .filter((key) => classObj[key])
        .join(' ')

    const stringifyClassArr = (classArr: string[]) =>
      classArr
        .filter((item) => item)
        .map((item) =>
          typeof item === 'string' ? item.trim() : typeof item === 'object' ? stringifyClassObj(item) : ''
        )
        .join(' ')

    const addTooltipClass = (bindClass: string | Record<string, string> | string[]) => {
      let className = ''

      if (bindClass) {
        if (typeof bindClass === 'string') {
          className = bindClass.trim()
        } else if (Array.isArray(bindClass)) {
          className = stringifyClassArr(bindClass)
        } else if (typeof bindClass === 'object') {
          className = stringifyClassObj(bindClass)
        }
      }

      return 'tiny-tooltip ' + className.replace(/\btiny-tooltip\b/g, '').trim()
    }

    // 查找默认的slots, 并把它渲染到组件所在位置上。
    const getFirstElement = () => {
      const slots = this.slots.default && this.slots.default()

      if (!Array.isArray(slots)) return null

      let element = null

      for (let index = 0; index < slots.length; index++) {
        const vnode = parseVnode(slots[index])

        if (!isEmptyVnode(vnode)) {
          element = vnode
          break
        }
      }

      return element
    }

    let firstElement = getFirstElement()

    if (firstElement && hooks.Fragment && firstElement.type === hooks.Fragment) {
      firstElement = firstElement.children[0]
    }

    if (!firstElement) return null

    const data = firstElement.data || firstElement.props || (firstElement.props = {})

    data.class = addTooltipClass(data.class)

    return firstElement
  }
})
</script>
