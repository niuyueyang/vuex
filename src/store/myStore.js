let Vue
class Store {
    constructor(options = {}) {
        // vue 中的数据只要是写在 data 中的,都是支持 响应式的,
        // 所以 我们只有把 vuex 中的state 定义在 Vue中的 data中
        this.myState = new Vue({
            data(){
                return {
                    state: options.state
                }
            }
        })

        // 定义实例上的getters
        this.getters = {};
        // 遍历options.getters
        Object.keys(options.getters).forEach(getterName => {
            Object.defineProperty(this.getters, getterName, {
                get:()=>{
                    return options.getters[getterName](this.state)
                }
            })
        })

        // 定义mutations
        let mutations = {};
        Object.keys(options.mutations).forEach(mutationName => {
            mutations[mutationName] = payload => {
                options.mutations[mutationName](this.state, payload)
            }
        })
        window.console.log(mutations)

        // 提供commit方法
        this.commit = (mutationName, payload)=>{
            mutations[mutationName](payload)
        }

        // 定义actions
        let actions = {};
        Object.keys(options.actions).forEach(actionsName => {
            actions[actionsName] = payload => {
                options.actions[actionsName](this, payload)
            }
        })
        // 提供dispatch方法
        this.dispatch = (actionsName, payload)=>{
            actions[actionsName](payload)
        }


    }
    // 使用类的属性访问器setter, getter
    get state(){
        return this.myState.state
    }
}

const install = _Vue => {
    window.console.log("install")
    Vue = _Vue // 用一个变量接收 _Vue 构造器
    Vue.mixin({
        beforeCreate() {
            //判断 根 实例 有木有传入store 数据源,
            //如果传入了, 就把它放到实例的 $store上
            if (this.$options && this.$options.store) {
                this.$store = this.$options.store
            } else {
                // 2. 子组件去取父级组件的$store属性
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })

}

export default {
    install,
    Store
}
