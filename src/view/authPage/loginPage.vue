<script setup lang="ts">
import { ref } from 'vue';

const fields=['username','password']
const username=ref({})
const password=ref('a')
const chn=(a:any,e:any)=>{
    console.log('c',e.target.value,a)
    username.value={...username.value,a:e.target.value}
}
username.value={...username.value,ola:'ok'}
</script>
<template>
    <div>{{username}}</div>
    
    
        <div>{{username}}</div>
        <input @input="chn('asd',$event)" type="text">
    
</template>

