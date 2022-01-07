<template lang="">
  <satu></satu>
  <dua></dua>
  <tiga></tiga>
</template>
<script>
import Satu from "./components/ProvideInject/ComponentSatu.vue";

export default {
  components: {
    Satu,
  },
  data() {
    return {
      author: "Rizkyzet",
    };
  },

  provide(){
    return{
      providedAuthor: this.author
    }
  }
};
</script>
<style lang=""></style>
