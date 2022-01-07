<template>
  <div>{{ total }}</div>
  <input v-model="num1" />
  <br />
  <input v-model="num2" />
</template>
<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
    };
  },
  computed:{
    total(){
      // return parseInt(this.num1) + parseInt(this.num2)
    if(this.num1 > this.num2){
      return 'satu lebih besar'
    }
    return 'dua lebih besar'
    }
  }
};
</script>
<style></style>
