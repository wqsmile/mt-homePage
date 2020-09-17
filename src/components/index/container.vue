<template>
  <div>
    <mt-movie />
    <mt-home-stay />
    <mt-recommends />
    <mt-nav />
  </div>
</template>

<script>
import mtMovie from './movie'
import mtHomeStay from './homeStay'
import mtRecommends from './recommends'
import mtNav from './mtNav'

export default {
  data() {
    return {
      // movieList: []
    }
  },
  components: {
    mtMovie,
    mtHomeStay,
    mtRecommends,
    mtNav
  }
}
</script>
