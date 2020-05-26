// doc: https://echarts.apache.org/zh/cheat-sheet.html

import echarts from 'echarts'

const $chart = document.getElementById('main')

// 调整宽度
const width = document.documentElement.clientWidth
main.style.width = width + 'px'
main.style.height = width * 1.2 + 'px'

// 基于准备好的dom，初始化echarts实例
// 主题：dark, light, default
const myChart = echarts.init($chart, 'light')

const lineChartOption = {
  title: {
    text: '折线图'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
}


// 指定图表的配置项和数据
let xData = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
let yData = [5, 20, 36, 10, 10, 20]
const barCharOption = {
  baseOption: {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: yData
    }]
  },
  media: [
    {
      query: {
        maxWidth: 500,
      },
      option: {
        series: [{
          name: '销量',
          type: 'bar',
          itemStyle: {
            color: 'red'
          },
          data: yData
        }]
      }
    }
  ]
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(barCharOption)

let i = 0

let isLoading = false

loadMore.addEventListener('click', () => {
  if (isLoading) return
  i += 1
  const key = i
  const value = i + 100

  isLoading = true
  myChart.showLoading()

  setTimeout(() => {
    xData = [...xData, key]
    yData = [...yData, value]

    myChart.setOption({
      xAxis: {
        data: xData
      },
      series: [{
        data: yData
      }]
    })

    myChart.hideLoading()
    isLoading = false
  }, 2000)
})

myChart.on('click', (e) => {
  console.log('index', e.dataIndex)
  console.log('x', e.name)
  console.log('y', e.data)
})
