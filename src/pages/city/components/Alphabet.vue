<template>
	<ul class="list">
		<li 
			class="item" 
			v-for="item of letters" 
			:key="item" 
			:ref="item"
			@click="letterClick" 
			@touchstart="handletouchStart" 
			@touchmove="handletouchMove" 
			@touchend="handletouchEnd"
		>
			{{item}}
		</li>
	</ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props:{
  	cities:Object
  },
  // 当触发touchstart之后才执行touchmove 所以定义该标识位
  data (){
  	return {
  		touchStatus:false,
  		startY:0,
  		timer:null
  	}
  },
  // 计算出当前所在字母的位置
  computed:{
  	letters (){
  		const letters = []
  		for (let i in this.cities) {
  			letters.push(i)
  		}
  		return letters
  	}
  },
  // 当ajax获取到数据的时候开始计算
  update(){
  	this.startY = this.$refs['A'][0].offsetTop
  },
  methods:{
  	letterClick(e){
  		// 被点击的时候向外触发一个事件并携带被点击的数值
  		this.$emit('change',e.target.innerText)
  	},
  	handletouchStart(){
  		this.touchStatus = true
  	},
  	// 获取手指移动到的地方并计算所接触的字母
  	handletouchMove(e){
  		if (this.touchStatus) {
  			if (this.timer) {
  				clearTimeout(this.timer)
  			}
  			this.timer = setTimeout(() => {
	  			const touchY = e.touches[0].clientY - 79
	  			const index = Math.floor((touchY - this.startY) / 20)
	  			if(index >= 0 && index < this.letters.length){
	  				this.$emit('change',this.letters[index])
	  			}
  			},16)
  		}
  	},
  	handletouchEnd(){
  		this.touchStatus = false
  	}
  }
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display:flex
		flex-direction:column
		justify-content:center
		position: absolute
		top: 1.58rem
		right:0
		bottom:0
		width:.4rem
		.item
			text-align:center
			line-height:.4rem
			color:$bgColor
</style>