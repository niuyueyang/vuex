import Vue from 'vue'
import Vuex from './myStore'

// 使用 了 Vue.use() 方法,官方文档是这样解释的, 可以看到使用 use() 方法,必须提供一个 install 方法
// 该方法 有两个 参数, 一个 是 Vue 的构造器, 另一个是可选项
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num:0,
        name:'我是测试数据',
        mill: "我是getters用的"
    },
    getters:{
        getMill(state) {
            return state.mill
        }
    },
    mutations: {
      incr(state, payload){
        state.num += payload
      },
      desr(state, payload){
          state.num -= payload
      }
    },
    actions: {
      asyncIncr({commit}, payload){
        setTimeout( () => {
          commit('incr', payload)
        }, 0)
      }
    },
    modules: {
    }
})
