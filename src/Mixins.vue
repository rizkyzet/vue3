<template>
   <pre>{{$data}}</pre>
   <button @click="onPress">Klik</button>
</template>

<script>
import basicMixins from "./mixins/basic.js"
import mergeMixins from "./mixins/merge.js"

export default {
    mixins:[basicMixins,mergeMixins],
    data(){
        return {
            name:'rizkyzet'
        }
    }
}
</script>