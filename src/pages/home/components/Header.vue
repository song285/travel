<template>
  <div class="header">
		<div class="header-left"><div class="iconfont back-icon">&#xe696;</div></div>
		<div class="header-input"><span class="iconfont search-icon">&#xe64d;</span>输入城市景点/游玩/主题</div>
		<router-link to="/city">
			<div class="header-right">{{this.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  // 将state/index中的city内容映射到mapSate之中
  computed:{
  	...mapState(['city'])
  }
}
</script>
<!-- 要使用stylus使用lang标识，只想对当前组件有效使用scoped -->
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
	display: flex
	color: #fff
	background: $bgColor
	line-height: $HeaderHeight
	.header-left
		width: .64rem
		float: left
		.back-icon
			text-align: center
			font-size: .4rem
	.header-input
		flex: 1
		background: #fff
		margin-top: .12rem
		height: .64rem
		line-height: .64rem
		margin-left: .02rem
		border-radius: .05rem
		padding-left: .2rem
		color: #ccc
		.search-icon
			padding-right: .1rem
	.header-right
		min-width: 1.04rem
		padding:0 .1rem
		float:right
		text-align: center
		color:#fff
		.arrow-icon
			font-size: .24rem
</style>
