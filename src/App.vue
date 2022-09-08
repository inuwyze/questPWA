
<script setup lang="ts">
import LoginPage from "./view/authPage/loginPage.vue"
import Home from "./view/Quest/Home.vue"
import { useAuthStore } from "./store/authStore";
import { storeToRefs } from "pinia";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

  let {isLoggedIn}=storeToRefs(useAuthStore())

  
  
  
</script>

<template>
  <div>
    <Home v-if="isLoggedIn" />
    <LoginPage  v-else/>
      <img src="/logo_512.png" class="logo " alt="Vue logo" />

    
  </div>
  <div
  >QUEST</div>
</template>

<style scoped>
.glow-enter-active,
.glow-leave-active {
  transition: opacity 0.5s ease;
}

.glow-enter-from,
.glow-leave-to {
  opacity: 0;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(10px 10px 50px #646cffaa) ;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo {
  animation: shake .6s ease-out ;
  /* transform: translate3d(0, 0, 0); */
}

@keyframes shake {
 
  100% {
    transform: rotate(360deg);
  }


}
</style>
