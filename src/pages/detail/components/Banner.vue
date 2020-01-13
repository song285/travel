<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1706/e5/e563e6454d1771c2a3.img.jpg_600x330_a9f0f96c.jpg">
			<div class="banner-info">
				<div class="banner-title">厦门方特梦幻王国(AAAA景区)</div>
				<div class="banner-number"><span class="iconfont banner-icon">&#xe674;</span>6</div>
			</div>
		</div>
		<!-- 这里接收画廊传递过来的close事件 -->
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleBannerClose"></common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
	name: "DetailBanner",
	data () {
		return {
			showGallary:false,
			imgs: ['http://img1.qunarzz.com/sight/p0/1706/e5/e563e6454d1771c2a3.img.jpg_r_800x800_d893f8b1.jpg','http://img1.qunarzz.com/sight/p0/1706/cd/cd8098eca9711c5ca3.img.jpg_r_800x800_2b815b7c.jpg']	
		}
	},
	methods:{
		// 点击图片就显示画廊
		handleBannerClick () {
			this.showGallary = true
		},
		// 点击画廊就关闭画廊
		handleBannerClose () {
			this.showGallary = false
		}
	},
	components:{
		CommonGallary
	}
}
</script>

<style lang="stylus" scoped>
	.banner
		position:relative
		overflow:hidden
		height:0
		padding-bottom:55%
		.banner-img
			width:100%
		.banner-info
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			height:.6rem
			color:#fff
			display:flex
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-title
				flex:1
				font-size:.36rem
				padding:0 .2rem
			.banner-number
				margin-top:.14rem
				padding: 0 .4rem
				height:.36rem
				line-height:.36rem
				border-radius: .2rem
				background: rgba(0,0,0,.5)
				font-size:.24rem
				.banner-icon
					font-size:.24rem
					padding:0 .1rem
</style>