<template>
  <div class="city-search">
    <p>直接搜索:</p>
    <input
      type="text"
      placeholder="请输入城市中文或拼音"
      id="search-input"
      v-model="searchWord"
      @input="loading"
    />
    <div class="citys" v-if="isShowList" v-document-click="hideCity">
      <ul class="city-list">
        <li v-for="(city, index) of cityList" :key="index" @click="selectCity(city)">{{ city }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      searchWord: '',
      isShowList: false,
      cityList: []
    }
  },
  methods: {
    loading(e) {
      e.stopPropagation()
      this.$nextTick().then(() => {
        this.isShowList = true
        setTimeout(() => {
          axios.get('https://apimobile.meituan.com/group/v1/area/search/' + this.searchWord)
            .then(res => {
              // console.log(res)
              const data = []
              res.forEach(item => {
                // console.log(item)
                data.push(item.cityName)
              })
              this.cityList = data
            })
            .catch(err => {
              console.log(err)
            })
        }, 500)
      })
    },
    selectCity(city) {
      this.searchWord = city
    },
    hideCity() {
      this.isShowList = false
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/changeCity/citySearch.less";
</style>
