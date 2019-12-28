<template>
  <div class="home">
      <p>{{$store.state.name}}</p>
    <!--{{this.$store.getters.getNum}}-->
    <!--<button @click="incr">加一</button>-->
    <!--<button @click="AnsyncIncr">异步加一</button>-->
  </div>
</template>

<script>
// @ is an alias to /src


export default {
    name: 'home',
    methods:{
        // incr(){
        //     this.$store.commit('incr',1)
        // },
        // AnsyncIncr(){
        //     this.$store.dispatch('asyncIncr', 2)
        // }
    }
}
</script>
