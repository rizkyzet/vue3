<template lang="">
  <div>
   <span> Ini adalah child </span>

   <button @click="onPress">Click dari child</button>
  </div>
</template>
<script>
export default {
  emits: ["child-click"],
  methods: {
    onClick() {
      console.log("click saya");
    },
    onPress() {
      this.$emit("child-click", "value");
    },
  },
};
</script>
<style lang="">
</style>