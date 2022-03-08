<template>
  <div>
    <div v-for="item in fetchedAsk">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';

export default {
  computed: {
    // #3
   ...mapGetters([
     'fetchedAsk'
   ]
    //  {
    //   fetchedAsk : 'fetchedAsk'
    // }
    ),
    // #2
    //   ...mapState({
    //     ask: state => state.ask
    //   })
  },
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  // component가 실행되자 마자 호출하는 부분 life cycle
   created() {
     this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>