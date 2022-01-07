<template lang="">
    <div>
        {{ message }}
    </div>

    <input v-model="message">
</template>
<script>
export default {
  data() {
    return {
      message: "tes",
    };
  },
  watch: {
    message(value) {
      console.log(value);
    },
  },
};
</script>
<style lang="">
</style>