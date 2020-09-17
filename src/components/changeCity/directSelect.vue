<template>
  <div class="direct-select">
    <div class="by-province">按省份选择:</div>
    <by-province :area-list="areaList" by-what="省份" />
    <by-city :area-list="areaList" by-what="城市" />
    <city-search />
  </div>
</template>

<script>
import byProvince from './byProvince'
import byCity from './byCity'
import citySearch from './citySearch'

export default {
  components: {
    byProvince,
    byCity,
    citySearch
  },
  data() {
    return {
      areaList: []
    }
  },
  beforeCreate() {
    this.$http.get('/ptapi/getprovincecityinfo/')
      .then(res => {
        // console.log(res)
        this.areaList = res
      })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/changeCity/directSelect.less";
</style>
