<template>
  <div class="change-city">
    <div>
      <direct-select />
    </div>
    <div>
      <hot-curr :cityList="hotCity" />
    </div>
    <div>
      <hot-curr :cityList="recentCity" />
    </div>
    <div>
      <by-letter />
    </div>
  </div>
</template>

<script>
import directSelect from './directSelect'
import hotCurr from './hot_curr'
import byLetter from './byLetter'

export default {
  components: {
    directSelect,
    hotCurr,
    byLetter
  },
  data() {
    return {
      hotCity: {
        title: '热门城市',
        citys: ['北京', '上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都']
      },
      recentCity: {
        title: '最近访问',
        citys: ['北京', '青岛']
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/changeCity/index.less";
</style>
