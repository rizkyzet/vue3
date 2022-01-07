<template lang="">
 <child ref="childComponent" @child-click="onPress" />

 <button @click="clickSaya">Button dari parent</button>
</template>
<script>
import Child from "./components/ChildComponentRefs.vue";
export default {
  components: { Child },
  methods:{
    onPress(val){
      console.log('click dari child',val )
    },
    clickSaya(){
      this.$refs.childComponent.onClick();
    }
  }
};
</script>
<style lang="">
</style>