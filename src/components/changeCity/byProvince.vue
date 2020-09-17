<template>
  <div class="by-area">
    <div class="wrap" @click="showDetail" v-document-click="hideDetail">
      <span>{{ areaName }}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div class="detail" v-if="isShowAreaList">
      <p class="title">{{ byWhat }}</p>
      <ul class="areas">
        <li v-for="area of areas" :key="area.provinceCode">
          <span @click="selectProvince(area.provinceCode, $event)">{{ area.provinceName }}</span>
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
      this.isShowAreaList = true
    },
    selectProvince(provinceCode, e) {
      this.areaName = e.target.innerText
      this.isShowAreaList = false
      this.$store.commit('switchChangeArea', true)
      this.$store.commit('changeProvinceCode', provinceCode)
    },
    hideDetail(e) {
      this.isShowAreaList = false
    }
  },
  computed: {
    areas() {
      return this.areaList
    },
    ...mapState(['isProvinceSelect', 'provinceCode'])
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/changeCity/byArea.less";
</style>
