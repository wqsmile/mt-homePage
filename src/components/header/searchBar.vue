<template>
  <div class="search-bar">
    <el-row class="search-row">
      <el-col :span="3" class="left">
        <router-link to="/">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotSearch" v-if="isHotSearch">
            <dt>热门搜索</dt>
            <dd v-for="hotKey of hotSearch" :key="hotKey">
              <router-link :to="{ name: 'goods', params: { name: hotKey } }">{{ hotKey }}</router-link>
            </dd>
          </dl>
          <dl class="search-list" v-if="isSearchList">
            <dd v-for="seacrhKey of searchList" :key="seacrhKey">
              <router-link :to="{ name: 'goods', params: { name: seacrhKey } }">{{ seacrhKey }}</router-link>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: '',
      isFocus: false,
      hotSearch: ['京东第一温泉度假村', '99旅馆连锁', '尚客优快捷酒店'],
      searchList: ['火锅', '火锅自助餐', '火锅重庆']
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false
      }, 100)
    }
  },
  computed: {
    isHotSearch() {
      return this.isFocus && !this.searchWord
    },
    isSearchList() {
      return this.isFocus && this.searchWord
    }
  }
}
</script>

<style lang="less">
@import "../../assets/css/header/searchBar.less";
</style>
