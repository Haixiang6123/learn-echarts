<template>
    <div>
        <h1>在 Vue 里使用 ECharts</h1>
        <VueECharts :options="lineChartOption"/>
    </div>
</template>

<script lang="ts">
  import VueECharts from './VueECharts.vue'

  export default {
    data() {
      return {
        lineChartOption: {
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
      }
    },
    components: {
      VueECharts
    }
  }
</script>

<style scoped lang="scss">

</style>
