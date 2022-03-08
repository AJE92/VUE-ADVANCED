<template>
  <div>
    <div v-for="user in fetchedNews">{{ user.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
   ...mapGetters([
     'fetchedNews'
      ]
    ), 
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');

  },
  
}
</script>

<style>

</style>