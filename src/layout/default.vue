<template>
  <div class="page-default">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <mt-header />
      </el-header>
      <!-- 内容区 -->
      <el-main>
        <router-view />
      </el-main>
      <!-- 底部 -->
      <el-footer>
        <mt-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import mtHeader from '@/components/header/index'
import mtFooter from '@/components/footer/footer'

export default {
  components: {
    mtHeader,
    mtFooter
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/layout/default.less';
</style>
