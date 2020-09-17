<template>
  <div class="search-result">
    <div class="title">
      <ul>
        <li class="active">智能排序</li>
        <li>
          价格排序
          <i class="el-icon-d-caret"></i>
        </li>
        <li>人气最高</li>
        <li>评价最高</li>
      </ul>
    </div>
    <ul class="search-res">
      <li v-for="item of resList" :key="item.itemId">
        <a href="#" :style="{ background: 'url('+item.imgUrl.replace('w.h/', '')+')' }"></a>
        <div class="info">
          <p class="title">{{ item.title }}</p>
          <p class="comment">
            <span class="star">
              <i v-for="i in 5" :key="i" class="el-icon-star-on"></i>
            </span>
            <span class="light-star">
              <i class="el-icon-star-on" v-for="i in parseInt(item.score)" :key="i"></i>
            </span>
            <span class="star-comment">很好</span>
            <span class="score">{{ item.score }}分</span>
            <span class="comment-num">{{ item.commentNum }}人评价</span>
          </p>
          <p>{{ item.title }}</p>
          <p>人均￥{{ item.avgPrice }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      resList: []
    }
  },
  created() {
    axios.get('http://open.duyiedu.com/api/meituan/list/recommend.json')
      .then(res => {
        console.log(res)
        this.resList = res
      })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/views/goods/searchResult.less";
</style>
