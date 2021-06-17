<template>
  <div>
    <div v-if="movieResult === 'limitSearch'">
      Too much search result. Borden your query.
    </div>
    <div class="movieContainer" v-else-if="movieResult === 'okay'">
      <div class="movieItem" v-for="movie in movies" :key="movie.imdbID">
        <img :src="movie.Poster" />
        <h2>{{ movie.Title }}</h2>
        <p>{{ movie.Year }}</p>
        <button @click="addNomination()">Nominate</button>
      </div>
    </div>
    <div v-else-if="movieResult === ''">Input movie name to see result.</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  name: "SearchResult",
  props: {
    movies: Array,
    movieResult: String,
  },
  methods:{
    addNomination(event:any){
      console.log(event);

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