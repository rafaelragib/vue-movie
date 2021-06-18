<template>
  <h3>Watch List</h3>
  <div v-for="v in val" :key="v">
    <p>{{v}}</p>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import {store} from '../store'
export default defineComponent({
  name: "WatchList",
  data(){
    return {
      val:store.watchList
    }
  } 
});
</script>

<style>
</style>