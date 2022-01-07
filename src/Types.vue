<template lang="">
  <child-component value="sadsad"></child-component>
  <child :message="'10'" :number="5"></child>
</template>
<script>
import Child from "./components/ChildComponentTypes.vue";
export default {
    components:{
        Child
    }
};
</script>
<style lang=""></style>
