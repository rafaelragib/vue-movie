<template>
  <div>
  <h3>Watch List</h3>
  <div class="listcontainer">
    <div class="list" v-for="v in val" :key="v">
      <p>{{ v }}</p>
      <button @click="removeFromList(v)">x</button>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { store } from "../store";
export default defineComponent({
  name: "WatchList",
  data() {
    return {
      val: store.watchList,
      cnt:0
    };
  },
  methods: {
    
    removeFromList(v: string) {
      const idx = this.val.indexOf(v);
      this.val.splice(idx, 1);
    },
  },
  unmounted() {
    store.watchList = this.val;
  },
});
</script>

<style>
.listcontainer {
  text-align: center;
  margin: auto;
  width: 7%;
  align-items: center;
}
.list {
  display: flex;
  margin: auto;
}
.listcontainer button {
  width: 18%;
  height: 15%;
}
</style>