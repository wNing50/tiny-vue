<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-huicharts-core'
import registerAmap from './amap'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartAutonaviMap',
  mixins: [Core],
  data() {
    return {
      iChartName: 'AutonaviMapChart'
    }
  },
  mounted() {
    registerAmap()
  },
  methods: {
    updateChart() {
      if (this.options && Object.keys(this.options).length) {
        this.huiChartOption = { ...this.options, ...this.settings }
        if (!this.tooltipVisible) {
          this.huiChartOption.tooltip = { show: false }
        }

        if (!this.legendVisible) {
          this.huiChartOption.legend = { show: false }
        }

        return
      }

      const echartsSettings = [
        'grid',
        'dataZoom',
        'visualMap',
        'toolbox',
        'title',
        'legend',
        'xAxis',
        'yAxis',
        'radar',
        'axisPointer',
        'brush',
        'geo',
        'timeline',
        'graphic',
        'backgroundColor',
        'textStyle'
      ]
      this.huiChartOption = {
        ...this.settings,
        tooltip: this.tooltipVisible ? this.tooltip : { show: false },
        series: this.series
      }

      echartsSettings.forEach((prop) => {
        if (this[prop]) {
          this.huiChartOption[prop] = this[prop]
        }
      })

      if (!this.legendVisible) {
        this.huiChartOption.legend = { show: false }
      }
    }
  }
}
</script>

<!-- <style>
.ec-extension-amap {
  position: absolute !important;
  top: 0;
}
</style> -->
