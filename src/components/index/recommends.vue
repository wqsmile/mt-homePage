<template>
  <div class="page-recommends">
    <div class="wrap">
      <dl>
        <dt>猜你喜欢</dt>
        <dd>为你臻选最合适的</dd>
      </dl>
      <a href="#">
        全部
        <i class="el-icon-arrow-right"></i>
      </a>
    </div>
    <ul class="block">
      <li v-for="recommend of recommends" :key="recommend.itemId">
        <a href="#">
          <div
            class="recom-bg"
            :style="{ background: `url(${recommend.imgUrl.replace('/w.h', '')})`}"
          />
          <p class="title">{{ recommend.title }}</p>
          <p class="comment">
            <span class="star">
              <i class="el-icon-star-on" v-for="i in 5" :key="i"></i>
            </span>
            <span class="score">
              <i class="el-icon-star-on" v-for="i in parseInt(recommend.score)" :key="i"></i>
            </span>
            <span class="num">{{ recommend.commentNum }}个评价</span>
          </p>
          <p class="area-name">{{ recommend.areaName }}</p>
          <p class="low-price">￥{{ recommend.lowPrice }}起</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommends: []
    }
  },
  beforeCreate() {
    this.$http.get('/ptapi/recommends')
      .then(res => {
        // console.log(res)
        this.recommends = res
      })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/views/recommends.less";
</style>
