<template>
  <div id="app">
    <h2>vuex</h2>
    <p>{{$store.state.name}}</p>
    <p>{{$store.getters.getMill}}</p>
    {{$store.state.num}}
    <button @click="addNum">点击加1</button>
    <button @click="AnsyncIncr">异步加一</button>
  </div>
</template>


<script>
    export default {
        mounted() {
            // setInterval(() => {
            //     this.$store.state.num += 1
            // }, 1000)
        },
        methods:{
            addNum(){
                this.$store.commit('incr',1)
            },
            AnsyncIncr(){
                this.$store.dispatch('asyncIncr', 2)
            }
        }
    }
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
