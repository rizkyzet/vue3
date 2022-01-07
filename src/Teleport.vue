<template lang="">
  <teleport to="#target-teleport">
    <home-component></home-component>
  </teleport>
</template>
<script>
import HomeComponent from "./components/Teleport/Home.vue";
export default {
  components: {
    HomeComponent,
  },
};
</script>
