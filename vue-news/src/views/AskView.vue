<template>
  <div>
    <div v-for="item in this.$store.state.items">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  // component가 실행되자 마자 호출하는 부분 life cycle
   created() {
     this.$store.dispatch('FETCH_ITEMS');
    // var vm = this;
    // fetchAskList()
    // .then(function(response) {
    //   console.log(response);
    //   vm.users = response.data;
    // })  
    // .catch(function(error){
    //   console.log(error);
    // })
  },
}
</script>

<style>

</style>