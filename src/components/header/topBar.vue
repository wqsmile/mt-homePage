<template>
  <el-row class="top">
    <el-col :span="10">
      <mt-geo />
    </el-col>
    <el-col :span="14">
      <mt-nav />
    </el-col>
  </el-row>
</template>

<script>
import mtGeo from './geo'
import mtNav from './nav'
export default {
  components: {
    mtGeo,
    mtNav
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/header/index.less';
</style>
