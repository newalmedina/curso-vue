<template>
  <div id="app">   
    <ul>
      <li>
        <router-link to="Test">Test</router-link>      
      </li>
      <li>
        <router-link to="User">User</router-link>
      </li>
      <li>
        <router-link to="UserApi">UserApi</router-link>
      </li>
      <li>       
        <router-link to="UserApiAxios">UserApiAxios</router-link>
      </li>      
    </ul>
  
 <router-view></router-view>
    
  </div>
</template>

<script>
// import Test from './components/Test.vue';
// import User from './components/User.vue';
// import UserApi from './components/UserApi.vue';
// import UserApiAxios from './components/UserApiAxios.vue';

export default {
  name: 'App',
  components: {
    // // Test,
    // User,
    // UserApi,
    // UserApiAxios
  }
}
</script>

<style>
 
</style>
