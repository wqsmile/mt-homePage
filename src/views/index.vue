<template>
  <div class="page-index">
    <div class="white-bg"></div>
    <el-row>
      <el-col :span="5">
        <mt-menu />
      </el-col>
      <el-col :span="19">
        <mt-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <mt-container />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mtMenu from '@/components/index/menu'
import mtLife from '@/components/index/life'
import mtContainer from '@/components/index/container'

export default {
  components: {
    mtMenu,
    mtLife,
    mtContainer
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/views/index.less';
</style>
