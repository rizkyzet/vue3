<template lang="">
  <div>{{message}}</div>
<hr/>
 <!-- <child :model-value="message" @update:model-value="message= $event" /> -->

 <child v-model="message" />
</template>
<script>
import Child from "./components/ChildComponentUpdateParent.vue";

export default {
  components: { Child },
  data() {
    return {
      message: "",
    };
  },
};
</script>
<style lang="">
</style>