<template>
 <div class="topnav">
  <a  href="#home" v-for="title in navTitle" :key="title">{{title}}</a>

</div>
</template>

<script>
export default 
{
    name: 'Nav',
    data(){
        return{
            navTitle:['Home','Other','Details']
        }
        
    }
}
</script>


<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #161925;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #CBF7ED;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #406e8e;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #8ea8c3;
  color: white;
}

</style>