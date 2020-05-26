import React, {useState} from 'react'
import ReactECharts from "./react-echarts"

const App = () => {
  const [options, setOptions] = useState(
    {
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
  )

  return (
    <div>
      <h1>React 使用 ECharts</h1>
      <ReactECharts options={options}/>
      <button>加载更多</button>
    </div>
  )
}

export default App
