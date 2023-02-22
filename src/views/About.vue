<template>
  <div class="about">
      <hello></hello>
      <router-view/>
  </div>
</template>

<script>
  import hello from '../components/HelloWorld.vue'
  export default {
    components : {
      hello
    },
    methods : {
    },
    mounted () {
      
    }
  }
</script>

<style scoped>

</style>
