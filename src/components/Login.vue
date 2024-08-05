<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <button @click="navigateToSignup">Sign Up</button>
      <button @click="navigateToForgotPassword">Forgot Password</button>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const store = useStore();
      const router = useRouter();
      const username = ref('');
      const password = ref('');
  
      const login = () => {
        const user = { username: username.value, password: password.value };
        store.commit('setUser', user);
        router.push('/');
      };
  
      const navigateToSignup = () => {
        // Navigate to signup page (create the page if necessary)
        router.push('/signup');
      };
  
      const navigateToForgotPassword = () => {
        // Navigate to forgot password page (create the page if necessary)
        router.push('/forgot-password');
      };
  
      return {
        username,
        password,
        login,
        navigateToSignup,
        navigateToForgotPassword,
      };
    }
  };
  </script>
  