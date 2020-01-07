<template>
  <div class="header">
		<div class="header-left"><div class="iconfont back-icon">&#xe696;</div></div>
		<div class="header-input"><span class="iconfont search-icon">&#xe64d;</span>输入城市景点/游玩/主题</div>
		<div class="header-right">城市<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<!-- 要使用stylus使用lang标识，只想对当前组件有效使用scoped -->
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
	display: flex
	color: #fff
	background: $bgColor
	line-height: .86rem
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
		width: 1.24rem
		float:right
		text-align: center
		.arrow-icon
			font-size: .24rem
</style>
