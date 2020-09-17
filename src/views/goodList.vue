<template>
  <div class="wrapper">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">北京美团</el-breadcrumb-item>
        <el-breadcrumb-item>北京火锅</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <category />
    </div>

    <div class="search-result">
      <search-result />
    </div>

    <div>
      <mt-nav />
    </div>
  </div>
</template>

<script>
import mtNav from '@/components/index/mtNav'
import Category from './goods/category'
import searchResult from './goods/searchResult'

export default {
  components: {
    mtNav,
    Category,
    searchResult
  },
  data() {
    return {
      categoryList: []
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/css/views/goods/goodList.less";
</style>
