<template>
  <div class="page-homeStay">
    <div class="wrap">
      <dl>
        <dt>推荐民宿</dt>
        <dd @mouseenter="showTianjin" :class="{ 'active': isShowTianjin }">天津</dd>
        <dd @mouseenter="showJinan" :class="{ 'active': !isShowTianjin }">济南</dd>
      </dl>
      <a href="#">
        全部
        <i class="el-icon-arrow-right"></i>
      </a>
    </div>
    <ul class="block">
      <!-- <li v-for></li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowTianjin: true,
      tianjin: []
    }
  },
  methods: {
    showTianjin() {
      this.isShowTianjin = true
    },
    showJinan() {
      this.isShowTianjin = false
    }
  },
  beforeCreate() {
    // this.$http.get('/ptapi/minsu?cityId=120100', {
    //   params: {
    //     // cityId: 120100
    //     uuid: '4cfd5028-a338-4689-be81-c9143463e64f'
    //   }
    // }).then(({ productList }) => {
    //   console.log(productList)
    //   // this.tianjin = productList
    // })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/views/homeStay.less";
</style>
