import React, {useEffect, useRef} from "react"
import echarts from 'echarts'

const ReactECharts = (props) => {
  const {options} = props

  const chart = useRef(null)
  const container = useRef(null)

  useEffect(() => {
    console.log(props)
    const width = document.documentElement.clientWidth
    container.current.style.width = width + 'px'
    container.current.style.height = width * 1.2 + 'px'

    console.log(container.current)

    chart.current = echarts.init(container.current, 'dark')
  }, [])

  useEffect(() => {
    console.log(options)
    chart.current.setOption(options)
  }, [options])

  return (
    <div ref={container}/>
  )
}

export default ReactECharts
