<template lang="">
  <child>
    <template v-slot:default>
        <span>Ini adalah Judul</span>
    </template>
    <template v-slot:slotDua>
        <span>Ini adalah Content</span>
    </template>
    <template v-slot:slotTiga>
        <span>Ini adalah Footer</span>
    </template>
  </child>
</template>
<script>
import Child from "./components/ChildComponentNamedSlot.vue";
export default {
  components: {
    Child,
  },
};
</script>
<style lang=""></style>
