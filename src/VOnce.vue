<template>
 <div v-once>{{message}}</div>

 <button @click="message='borborbor'">click</button>
</template>
<script>
export default {
    data(){
        return{
            message:'hi bro'
        }
    }
}
</script>
<style>
    
</style>