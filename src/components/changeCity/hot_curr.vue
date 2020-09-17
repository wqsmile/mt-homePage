<template>
  <div>
    <dl>
      <dt>{{ cityList.title }}:</dt>
      <dd v-for="city of cityList.citys" :key="city">{{ city }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    cityList: Object
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/changeCity/hot_curr.less';
</style>
