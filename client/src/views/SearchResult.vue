<template>
  <div>
    <div v-if="movieResult === 'limitSearch'">
      Too much search result. Borden your query.
    </div>
    <div class="movieContainer" v-else-if="movieResult === 'okay'">
      <div class="movieItem" v-for="movie in movieList" :key="movie.imdbID">
        <img :src="movie.Poster" />
        <h2>{{ movie.Title }}</h2>
        <p>{{ movie.Year }}</p>
        <button @click="addToList(movie)">{{movieMessage(movie.watch)}}</button>
      </div>
    </div>
    <div v-else-if="movieResult === ''">Input movie name to see result.</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import {store} from '../store';
export default defineComponent({
  name: "SearchResult",
  props: {
    movies: Array,
    movieResult: String,
  },
  
  data() {
    return {
      movieList: this.movies,
    };
  },
  watch: {
    movies(val){
      this.movieList=val;
    }
  },
  methods: {
    addToList(movie:any){
      if(!movie.watch){
        store.watchList.push(movie.Title);
        movie.watch=true;
      }
      else{
        const idx=store.watchList.indexOf(movie.Title);
        store.watchList.splice(idx,1);
        movie.watch=false;
      }
    },
    movieMessage(watched:boolean){
      return watched ? "Remove from watch List" : "Add to watch List" 
    }
  }
});
</script>

<style scoped>
.movieContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.movieItem {
  padding: 1em;
  flex-grow: 1;
}
</style>