<template>
  <div class="by-letter">
    <div class="letters">
      <dl>
        <dt>按拼音首字母选择:</dt>
        <dd v-for="letter of letters" :key="letter+'bb'">{{ letter }}</dd>
      </dl>
    </div>
    <div class="detail">
      <dl v-for="(item, index) of citys" :key="index">
        <dt>{{ item.letter }}</dt>
        <dd v-for="(city, index) of item.list" :key="index+'aa'">{{ city }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      letters: 'ABCDEFGHJKLMNPQRSTWXYZ'.split(''),
      citys: [],
      scrollLock: false
    }
  },
  methods: {
    async showDetail() {
      for (let i = 0, len = this.letters.length; i < len; i++) {
        const a = await axios.get('https://apimobile.meituan.com/group/v1/area/search/' + this.letters[i])
        // console.log(a)
        const data = []
        const temp = {}
        a.forEach(item => {
          if (!temp[item.cityAcronym]) {
            temp[item.cityAcronym] = item.cityAcronym
            data.push(item.name)
          }
        })
        this.citys.push({ letter: this.letters[i], list: data })
      }
    },
    // 滚动条触发函数
    handleScroll() {
      // 满足差值且没加锁时才能加载数据
      if (!this.scrollLock) {
        this.scrollLock = true
        this.showDetail()
      }
    }
  },
  created() {
    this.showDetail()
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/changeCity/byLetter.less";
</style>
