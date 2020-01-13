<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
		    <swiper-slide v-for="item,index of imgs" :key="index">
		    	<img class="gallary-img" :src="item">
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>		
		</div>
	</div>
</template>

<script>
export default {
	name:"CommonGallary",
	props:{
		imgs:{
			type:Array,
			default () {
				return []
			}
		}
	},
	data (){
		return {
			swiperOptions:{
				pagination:'.swiper-pagination',
				paginationType: 'fraction',
				// 只要监听到本身或者父级元素dom发生改变，就会自己刷新重新计算宽度
				observeParents: true,
				observer:true
			}
		}
	},
	methods :{
		handleGallaryClick () {
			// 点击画廊 向外传递一个close事件。
			this.$emit('close')
		}
	}
}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow:inherit
	.container
		display:flex
		flex-direction:column
		justify-content: center
		z-index:99
		position:fixed
		top:0
		bottom:0
		left:0
		right:0
		background:#000
		.wrapper
			width:100%
			height:0
			// overflow:hidden
			padding-bottom:100%
			.gallary-img
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-1rem
</style>