<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<!-- 循环渲染数据 -->
			<swiper-slide v-for="page,index of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name:'HomeIcons',
		props:{
			list:Array
		},
		data (){
			return {
				// 显示控制点
				swiperOption: {
					pagination: '.swiper-pagination'
				}
			}
		},
		// 通过计算属性来计算需要轮播的页数
		computed:{
			pages (){
				const pages = []
				this.list.forEach((item,index) => {
					//假如index=3 通过向上取整page=0 则该index展示在第一页 index>=8 则展示在第二页
					const page = Math.floor(index/8)
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				}) 
				return pages
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.icons >>> .swiper-container
		overflow: hidden
		height: 0
		padding-bottom: 55%
	.icons 
		margin-top: .1rem
		.icon
			position:relative
			float: left
			width: 25%
			height:0
			padding-bottom: 25%
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				box-sizing:border-box
				padding:.1rem
				.icon-img-content
					display:block
					margin:0 auto
					height:100%
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0
				height:.44rem
				padding:.1rem
				line-height:.44rem
				text-align:center
				color:$darkTextColor
				// 当文字描述过长，显示省略点
				ellipsis()
</style>