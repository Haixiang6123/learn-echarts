import echarts from 'echarts'

// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('main'));

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
};


// 指定图表的配置项和数据
const barCharOption = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data:['销量']
  },
  xAxis: {
    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(lineChartOption);