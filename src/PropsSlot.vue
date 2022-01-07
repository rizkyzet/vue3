<template lang="">
  <child>
    <template v-slot:default="props">
        <span>Judul : {{props.data}}</span>
    </template>
    <template v-slot:slotDua="{data}">
        <span>Judul : {{data}}</span>
    </template>
    <template v-slot:slotTiga="{data}">
        <span>Judul : {{data}}</span>
    </template>
  </child>
</template>
<script>
import Child from "./components/ChildComponentPropsSlot.vue";
export default {
  components: {
    Child,
  },
};
</script>
<style lang=""></style>
