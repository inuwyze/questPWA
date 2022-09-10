<script setup lang="ts">
import { computed } from '@vue/reactivity';
import {useAuthStore} from '../../store/authStore';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
useAuthStore().isLoggedIn=false
const a=storeToRefs(useAuthStore())
const authStore=useAuthStore()
const {phonenumber,password,} =storeToRefs(authStore)
const fields=['phonenumber','password',]
// const phonenumber=ref('')

const inp=(e:Event)=>{
    const c=e as InputEvent
    if(!isNaN(Number(c.data)) && c.data!=' ')
    phonenumber.value=(c.target as  HTMLInputElement).value
    
    else{
        (c.target as  HTMLInputElement).value=phonenumber.value
    }
    
}


const validPhoneNumber=computed(()=>{
    return (phonenumber.value.toString().length==10)
})
const validPassword=computed(()=>{
    return (password.value.toString().length>5)
})

const submitText=ref('confirm')
const submit=async()=>{
    if(submitText.value=='confirm'){
        submitText.value='.'

        // submitText.value='loading .'
        let counter=1
        let loading=setInterval(()=>{
            // if(counter==0)
            // submitText.value='loading .'
            submitText.value='.'.repeat(counter+1)
            counter++
            counter=(counter)%3
            
        },800)
        
        if(await authStore.authenticateLogin()){
            submitText.value='confirm'
            clearTimeout(loading)
        }else{

        }
}
    
}
</script>
<template>
    <div>

        <div
        class="title"
        :class="{active:validPhoneNumber && validPassword}">quest</div>
        <div
        class="form-input-container">
        
        <div
        class="form-input-title">
        phone number</div>
        
        <input 
        class="form-input"            
        :class="{active:validPhoneNumber}"
        :value=phonenumber
        @input="inp"
        type="text"
        maxlength="10" >
    </div>
    <div
    class="form-input-container">
    
        <div
        class="form-input-title">password</div>
        <input 
        class="form-input"
        :class="{active:validPassword}"
        maxlength="18" 
        v-model=password type='password'>
    </div>
    
    <!-- :disabled="!(validPassword && validPhoneNumber)" -->
    <button
    
        class="submit"
        :class="{active:validPassword && validPhoneNumber}"
        @click="submit">
        {{submitText}}
        
    </button>
    
</div>
</template>

<style >
    
    textarea:focus, input:focus{
    outline: none;
}
button:hover,button:focus{
    outline: none;
    border-color: none;
}
    .submit{
        padding: 10px;
        background-color:var(--submitBg);
        color:var(--bgColor);
        border-radius: 5px;
        text-transform: uppercase;
        width: 90%;
        margin-top: 30px;
        font-weight: 400;
        font-size: 14px;
        user-select: none;
    }
    
    .submit.active{
        background-color: var(--gold);
        font-size: 17px;
        height: 44px;
        letter-spacing: 1px;
        font-weight: 700;
        width: 100%;
        box-shadow: 0 0 30px -10px var(--gold);
        
    }
    .submit.active:active{
        transform: scale(.95);
    }

    .title{
        text-transform: uppercase;
        font-size: 42px;
        font-weight: 600;
        margin-top: -300px;
        margin-bottom: 50px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: var(--gold);
        transition: text-shadow .3s;
    }
    .title.active{
        text-shadow: 0px 0px 13px rgba(var(--goldD), 0.444);
    }
    .form-input-container{
        padding:5px;
    }
    .form-input-title{
        text-transform:capitalize;
        margin:8px;
        font-size: 14px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
    .form-input{
        letter-spacing: 2px;
        padding: 7px;
        border-radius: 5px;
        text-align: center;
        border: 1px solid transparent;
        font-size: 16px;
        word-spacing: 6px;
        font-weight: 600;
    }
    .form-input.active{
       border:1px solid var(--gold);
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
        appearance: none;
    -moz-appearance: textfield;
    }
</style>

