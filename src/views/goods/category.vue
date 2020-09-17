<template>
  <div class="category">
    <dl>
      <dt>
        分类
        <span>全部</span>
      </dt>
      <dd
        @mouseover="showDetail(index)"
        @mouseleave="hideDetail(index)"
        v-for="(item, index) of categoryList"
        :key="item.title"
      >
        {{ item.title }}
        <i class="el-icon-caret-bot tom"></i>
        <dl
          class="sub-dl"
          v-if="isShowDetail[index]"
          @mouseleave="hideDetail(index)"
        >
          <dt>{{ item.title }}</dt>
          <dd v-for="subItem of item.subList" :key="subItem.id">{{ subItem.name }}</dd>
        </dl>
      </dd>
    </dl>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categoryList: [],
      isShowDetail: [],
      timer: null
    }
  },
  methods: {
    showDetail(index) {
      clearTimeout(this.timer)
      this.$set(this.isShowDetail, index, true)
    },
    hideDetail(index) {
      this.timer = setTimeout(() => {
        this.$set(this.isShowDetail, index, false)
      }, 500)
    }
  },
  beforeCreate() {
    console.log('asd')
    axios.get('http://open.duyiedu.com/api/meituan/list/classify.json')
      .then(res => {
        console.log(res)
        this.categoryList = res
        console.log(this.categoryList)
        this.categoryList.forEach((item, index) => {
          this.isShowDetail[index] = false
        })
      })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/views/goods/category.less";
</style>
