import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// 让vue使用vuex插件
Vue.use(Vuex)



// 导出的是vuex创建的一个仓库
export default new Vuex.Store({
	// 公用的数据存储在state之中
	state,
	mutations
})