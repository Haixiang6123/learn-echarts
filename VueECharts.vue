<template>
    <div ref="container"></div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    props: ['options'],
    data() {
      return {
        chart: null,
      }
    },

    mounted() {
      const {container} = this.$refs

      const width = document.documentElement.clientWidth
      container.style.width = width + 'px'
      container.style.height = width * 1.2 + 'px'

      this.chart = echarts.init(container, 'dark')

      this.chart.setOption(this.options)
    }
  }
</script>

<style scoped lang="scss">

</style>
