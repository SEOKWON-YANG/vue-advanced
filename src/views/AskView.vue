<template>
    <div>
      <div v-for="(user, index) in this.$store.state.ask" :key="index">{{user.title}}</div>
  </div>
</template>

<script>
export default{
   created(){
     this.$store.dispatch('FETCH_ASK')
  }

}
</script>

<style>

</style>