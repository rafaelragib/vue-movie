<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div>
    <div class="topnav">
      <div  v-for="navItems in nav" :key="navItems.title">
        <router-link class="anchor" :to="navItems.path">{{ navItems.title }}</router-link>
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
          title: "Sign In",
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
  min-height: 900px;
}
.topnav {
  background-color: #2f3e46;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.anchor {
  float: left;
  color: #CBF7ED;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.anchor:hover {
  background-color: #406e8e;
  color: black;
}

/* Add a color to the active/current link */
.anchor.active {
  background-color: #8ea8c3;
  color: white;
}

</style>
