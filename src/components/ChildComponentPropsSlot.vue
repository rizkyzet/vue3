<template lang="">
  <div>Title</div>
  <slot :data="title"></slot>
  <div>Content</div>
  <slot name="slotDua" :data="content"></slot>
  <div>Footer</div>
  <slot name="slotTiga" :data="footer"></slot>
</template>
<script>
export default {
    data(){
      return{
        title:'Ini adalah title',
        content:'Ini adalah content',
        footer:'Ini adalah footer'
      }
    }
}
</script>
<style lang="">
    
</style>