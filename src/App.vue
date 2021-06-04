<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div>
    <div class="topnav">
      <div v-for="navItems in nav" :key="navItems.title">
        <router-link :to="navItems.path">{{ navItems.title }}</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",

  data() {
    return {
      nav: [
        {
          title: "Search",
          path: "/",
        },
        {
          title: "SignIn",
          path: "/SignIn",
        },
      ],
    };
  },
};
</script>
<style>
#app {
  /* font-family: Aveni./views/Search.vuens-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
}
/* 
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
