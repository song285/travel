<template>
	<div class="wrapper">
		<!-- v-if 的作用是解决轮播默认显示的最后一张,因为在没有获取到数据之前，渲染是一个空数组。判断如果是空数组就不进行渲染 -->
		<swiper :options="swiperOption" v-if="showSwiper">
	    <swiper-slide v-for="item of list" :key="item.id">
	    	<img class="swiper-image" :src="item.imgUrl">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		props: {
			list:Array
		},
		data(){
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop:true,
					autoplay:3000
				}
			}
		},
		computed:{
			showSwiper(){
				return this.list.length
			}
		}
	}
</script>

<style lang='stylus' scoped>
	// 这是改变控制点的默认颜色，'>>>'代表穿透  在wrapper下只要出现后面的样式就会执行
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		// 26.67%是图片的宽高比
		padding-bottom: 26.67%
		background: #eee
		.swiper-image
			width:100%
</style>