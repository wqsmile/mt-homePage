<template>
  <div class="by-area">
    <div
      class="wrap"
      @click="showDetail"
      v-document-click="hideDetail"
      :class="{ 'select-city': !isProvinceSelect && areaName === '城市' }"
    >
      <span>{{ areaName }}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div class="detail city-detail" v-if="isShowAreaList">
      <p class="title">{{ byWhat }}</p>
      <ul class="areas">
        <li v-for="area of areas" :key="area.id">
          <!-- <router-link to="/">{{ area.name }}</router-link> -->
          <span @click="selectCity(area.name)">{{ area.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    byWhat: {
      type: String,
      required: true
    },
    areaList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isShowAreaList: false,
      areaName: this.byWhat,
      newProvinceCode: ''
    }
  },
  methods: {
    showDetail(e) {
      e.stopPropagation()
      if (this.isProvinceSelect) {
        this.isShowAreaList = true
      }
    },
    selectCity(cityName) {
      this.areaName = cityName
      this.isShowAreaList = false
      this.$router.push({
        name: 'index',
        params: {
          city: cityName
        }
      })
    },
    hideDetail(e) {
      this.isShowAreaList = false
    }
  },
  computed: {
    areas() {
      return this.areaList.filter(item => {
        return item.provinceCode === this.provinceCode
      })[0].cityInfoList
    },
    ...mapState(['isProvinceSelect', 'provinceCode'])
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/changeCity/byArea.less";
</style>
