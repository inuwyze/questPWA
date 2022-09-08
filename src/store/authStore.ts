import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useAuthStore = defineStore('authStore', ()=>{

    const username=ref('')
    const password=ref('')
    const isLoggedIn=ref(false)

    
    const authenticateLogin=()=>{
      // function to authenticate login on form submission
    }

    return {username,password,isLoggedIn}
  
})