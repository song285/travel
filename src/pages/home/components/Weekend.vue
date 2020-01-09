<template>
	<div>
		<div class="recommend-title">周末去哪儿</div>
		<ul>
			<li :key='item.id' class="item border-bottom" v-for="item of recommendList">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeWeekend',
		data (){
			return {	
				recommendList:[{
					id:'001',
					imgUrl:'https://imgs.qunarzz.com/sight/source/1505/68/de862f94e383a6.jpg_r_640x214_f9df927b.jpg',
					title:'福州明谷行馆',
					desc:'最好玩的地方'
				},{
					id:'002',
					imgUrl:'https://imgs.qunarzz.com/sight/source/1505/68/de862f94e383a6.jpg_r_640x214_f9df927b.jpg',
					title:'福州明谷行馆',
					desc:'最好玩的地方'
				},{
					id:'003',
					imgUrl:'https://imgs.qunarzz.com/sight/source/1505/68/de862f94e383a6.jpg_r_640x214_f9df927b.jpg',
					title:'福州明谷行馆',
					desc:'最好玩的地方'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.recommend-title
		margin-top:.2rem
		line-height: .8rem
		background: #eee
		text-indent:.2rem
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:33.9%
		.item-img
			width:100%
	.item-info
		flex:1
		padding:.1rem
		min-width:0
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height:.4rem
			color:#ccc
			ellipsis()
</style>