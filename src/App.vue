<template>
<div >
  <Nav></Nav>
 
  <Search class="searchComp"></Search>
</div>
</template>

<script>
import Nav from './components/Nav.vue'
import Search from './components/Search.vue'



export default {
  name: 'App',
  components: {
    Nav,Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  background-color: #CAD2C5;
  min-height: 900px;
}
.searchComp
{

  text-align: center;
}
</style>
