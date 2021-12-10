<template>
  <div>
      jobs
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created(){
    axios.get('https://api.hnpwa.com/v0/jobs/1.json')
  }

}
</script>

<style>

</style>