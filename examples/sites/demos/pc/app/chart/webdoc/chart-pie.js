export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'pie-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['pie/base.vue']
    },
    {
      'demoId': 'pie-demo2',
      'name': { 'zh-CN': '自定义配色', 'en-US': 'Custom Coloring' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['pie/demo2.vue']
    },
    {
      'demoId': 'pie-demo3',
      'name': { 'zh-CN': '鼠标悬浮提示框', 'en-US': 'Mouse hovering prompt box' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['pie/demo3.vue']
    },
    {
      'demoId': 'pie-demo4',
      'name': { 'zh-CN': '图标和图例的位置调整', 'en-US': 'Adjusting the Positions of Icons and Legends' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['pie/demo4.vue']
    },
    {
      'demoId': 'pie-demo5',
      'name': { 'zh-CN': '图表描边颜色配置', 'en-US': 'Configuring Chart Stroke Colors' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['pie/demo5.vue']
    },
    {
      'demoId': 'pie-demo6',
      'name': { 'zh-CN': '可滚动翻页图例', 'en-US': 'Scrollable Page Turn Legend' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['pie/demo6.vue']
    },
    {
      'demoId': 'pie-demo7',
      'name': { 'zh-CN': '自定义图例大小', 'en-US': 'Customizing the legend Size' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['pie/demo7.vue']
    }
  ],
  apis: [{ 'name': 'chart-pie', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  dataType: string // 数据类型，可选值：KMB , normal , percent 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为 2
  dimension: string // 维度，默认 columns 第一项为维度
  hoverAnimation: boolean // 是否开启 hover 在扇区上的放大动画效果，默认值为 true 
  itemStyle: object // 图形样式，
  label: object // 饼图图形上的文本标签，
  labelLine: object // 标签的视觉引导线样式，
  legendLimit: number //  legend 显示数量限制，legend 数量过多会导致饼图样式错误，限制 legend 最大值并且当超过此值时，隐藏 legend 可以解决这个问题
  level: array // 多圆饼图时设置
  limitShowNum: number // 设置超过此数字时使用‘其他’代替，此时数据会按照由大到小顺序显示
  metrics: string // 指标，默认 columns 第二项为指标
  offsetY: number/string // 纵向偏移量，支持数值和百分比
  radius: number/string // 饼图半径，支持数值和百分比
  roseType: string // 显示为南丁格尔玫瑰图，默认不展示为南丁格尔玫瑰图，可设置为' radius ',' area '
  selectedMode: string // 选中模式，可选值：single , multiple，默认为 false
}

> 备注 1. level 的值接受二维数组，例如：  [['a', 'b'], ['c', 'd']]  , 表示的含义是内层展示的是维度中的  'a', 'b'  的指标加在一起组成的饼图，外层为  'c', 'd'  的指标加在一起组成的环图。
`
    }
  ]
}
