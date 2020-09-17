<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location-information" />
      <span class="cur-pos">{{ geo }}</span>
      <router-link :to="{ name: 'changeCity', params: { city: geo } }" class="change-city">切换城市</router-link>
      <span>
        [
        <a href="#">门头沟区&nbsp;</a>
        <a href="#">大厂回族自治县&nbsp;</a>
        <a href="#">廊坊</a>
        ]
      </span>
    </div>
    <div class="m-user">
      <router-link :to="{ name: 'login' }" class="login">立即登录</router-link>
      <router-link :to="{ name: 'register' }" class="register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // geo: '北京'
    }
  },
  computed: {
    geo() {
      // console.log(this.$route.params.city)
      const pos = this.$route.params.city
      return pos || '北京'
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/css/header/geo.less");
</style>
