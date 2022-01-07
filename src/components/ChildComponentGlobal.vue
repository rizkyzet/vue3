<template lang="">
  <!-- <div>Title</div>
  <slot :data="title"></slot>
  <div>Content</div>
  <slot name="slotDua" :data="content"></slot>
  <div>Footer</div>
  <slot name="slotTiga" :data="footer"></slot> -->
  <div>Ini adalah Component Global</div>
  <button @click="tes">tes</button>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      title: "Ini adalah title",
      content: "Ini adalah content",
      footer: "Ini adalah footer",
    };
  },
  methods:{
    tes(){
      console.log(this.value)
    }
  }
};
</script>
<style lang=""></style>
