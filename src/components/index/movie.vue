<template>
  <div class="page-movie">
    <div class="wrap">
      <dl>
        <dt>猫眼电影</dt>
        <dd @mouseenter="showMovie" :class="{ 'active': isShowMovie }">正在热映</dd>
        <dd @mouseenter="showNow" :class="{ 'active': !isShowMovie }">即将上映</dd>
      </dl>
      <a href="#">
        全部
        <i class="el-icon-arrow-right"></i>
      </a>
    </div>
    <div class="block">
      <el-carousel indicator-position="none" :autoplay="false" trigger="click" height="297px">
        <el-carousel-item v-for="(item, index) in movies" :key="index">
          <ul>
            <li v-for="(movie) of item" :key="movie.id">
              <a href="#" :style="{background: `url(${movie.img.replace('/w.h', '')})`}">
                <img
                  class="imax3d"
                  v-if="movie.ver.includes('3D/IMAX')"
                  src="https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png"
                  alt
                />
                <img
                  class="imax"
                  v-else-if="movie.ver.includes('IMAX')"
                  src="https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png"
                  alt
                />
                <img
                  class="_3d"
                  v-else-if="movie.ver.includes('3D')"
                  src="https://s0.meituan.net/bs/fe-web-meituan/9d1997a/img/3d.png"
                  alt
                />
                <div class="movie-info">
                  <p v-if="movie.sc" class="sc">
                    观众评
                    <span>{{ movie.sc }}</span>
                  </p>
                  <p v-else class="sc">
                    <span>{{ movie.wish }}</span>人想看
                  </p>
                  <p class="nm">
                    <span class="nm">{{ movie.nm }}</span>
                    <span v-if="isShowMovie" class="buy-ticket">购票</span>
                    <span v-else class="buy-ticket">预售</span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   movieList: {
  //     type: Array || Object,
  //     default: []
  //   }
  // },
  data() {
    return {
      movieList: [],
      nowMovieList: [],
      isShowMovie: true
    }
  },
  methods: {
    showMovie() {
      this.isShowMovie = true
    },
    showNow() {
      this.isShowMovie = false
    }
  },
  computed: {
    movies() {
      let list1, list2
      if (this.isShowMovie) {
        list1 = this.movieList.slice(0, this.movieList.length / 2)
        list2 = this.movieList.slice(this.movieList.length / 2)
      } else {
        list1 = this.nowMovieList.slice(0, this.nowMovieList.length / 2)
        list2 = this.nowMovieList.slice(this.nowMovieList.length / 2)
      }
      return [list1, list2]
    }
  },
  beforeCreate() {
    this.$http.get('/ptapi/getHotFilms', {
      params: {
        ci: 1,
        limit: 10
      }
    }).then(({ hot }) => {
      // console.log(res)
      this.movieList = hot
    })
    this.$http.get('/ptapi/getComingFilms', {
      params: {
        ci: 1,
        limit: 10
      }
    }).then(({ coming }) => {
      // console.log(coming)
      this.nowMovieList = coming
    })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/views/movie.less";
</style>
