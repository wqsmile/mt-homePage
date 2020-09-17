<template>
  <div class="page-life">
    <ul class="life-nav">
      <li>
        <a href="#">美团外卖</a>
      </li>
      <li>
        <a href="#">猫眼电影</a>
      </li>
      <li>
        <a href="#">美团酒店</a>
      </li>
      <li>
        <a href="#">民宿 / 公寓</a>
      </li>
      <li>
        <a href="#">商家入驻</a>
      </li>
      <li>
        <a href="#">美团公益</a>
      </li>
    </ul>
    <el-row class="life-1">
      <el-col :span="14">
        <mt-slide />
      </el-col>
      <el-col :span="4" class="col-2">
        <a href="#">
          <div class="item"></div>
        </a>
      </el-col>
      <el-col :span="5" class="col-3">
        <mt-login />
      </el-col>
    </el-row>
    <el-row class="life-2">
      <el-col :span="7">
        <a href="#">
          <div class="item1"></div>
        </a>
      </el-col>
      <el-col :span="7">
        <a href="#">
          <div class="item2"></div>
        </a>
      </el-col>
      <el-col :span="4">
        <a href="#" class="a-item3">
          <div class="item3"></div>
        </a>
      </el-col>
      <el-col :span="6">
        <div class="item4">
          <p class="qrcode"></p>
          <p>美团APP手机版</p>
          <p>
            <span>1元起</span> 吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mtSlide from './slide'
import mtLogin from './login'

export default {
  components: {
    mtSlide,
    mtLogin
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/views/life.less";
</style>
