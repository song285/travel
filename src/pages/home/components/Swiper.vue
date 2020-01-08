<template>
	<div class="wrapper">		
		<swiper :options="swiperOption">
	    <swiper-slide v-for="item of swiperList" :key="item.id">
	    	<img class="swiper-image" :src="item.imgUrl">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		data(){
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop:true
				},
				swiperList:[{
					id:'001',
					imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/8c458e9fe5b5f4575b1d7ec0489a9ff8.jpg_750x200_f0fbf511.jpg'
				},{
					id:'002',
					imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/d6df0db510d7b9aaa3d9ce4cffafeca1.jpg_750x200_abb38f14.jpg'
				}]
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