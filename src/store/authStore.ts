import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '../router'


export const useAuthStore = defineStore('authStore', ()=>{

    const phonenumber=ref('1111111111')
    const password=ref('33333333')
    const isLoggedIn=ref(false)

    
    const authenticateLogin= ()=>{
      // function to authenticate login on form submission
      return new Promise((res,rej)=>{
        setTimeout(()=>{
          isLoggedIn.value=true
          router.push('/')
          res(true)
        },1000)
      })
    }

    return {phonenumber,password,isLoggedIn,authenticateLogin}
  
})