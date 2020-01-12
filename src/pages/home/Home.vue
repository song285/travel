<template>
  <div>
	  <home-header></home-header>
	  <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
	  <home-weekend :list="weenkendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: { 
  	HomeHeader, 
  	HomeSwiper,
  	HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data (){
    return {
      lastCity: '',
      swiperList:[],
      iconsList:[],
      recommendList:[],
      weenkendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo (){
      // 虽然这里我们写的是api的开头的地址，但是vue已经帮我们跳转到了我们本地的json文件
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res){
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weenkendList = data.weenkendList
      }
    }
  },
  mounted (){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 当使用keep-alive的时，会多出该周期函数
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
