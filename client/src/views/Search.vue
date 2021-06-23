<template>
  <div class="searchComponent">
    <h3>Search movie via Title</h3>
    <form @submit.prevent="">
      <input v-model="searchquery" placeholder="The Dark Knight" />
      <button @click="searchMovie" class="searchButton">Search</button>
    </form>
    <search-result :movies="movies" :movieResult="movieResult"></search-result>
  </div>
</template>

<script lang="ts">


import SearchResult from "./SearchResult.vue"
import { store } from "../store";
import { defineComponent } from "@vue/runtime-core";

type movieObject={
  Poster:string,
  Title:string,
  Year:string,
  imdbID:string,
  watch:boolean
}

export default defineComponent({
  name: "Search",
  components: { SearchResult },
  data() {
    return {
      searchquery: "" ,
      movies: [] as movieObject[],
      movieResult: "" ,
    };
  },

  methods: {
    async fetchMovie():Promise<any> {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_ENV_VARIABLE}s=${this.searchquery}&type=movie&${process.env.VUE_APP_API_KEY}`
        );
        return response.json();
      } catch (error) {
        console.log(error);
      }
    },
    searchMovie() {
      this.movies = [];
      this.fetchMovie().then((data) => {
        //console.log(typeof data.Response);
        if (data.Response === "False") {
          console.log("TOo much");
          this.movieResult = "limitSearch";
            return ;
        }

        this.movieResult = "okay";
        this.movies = data.Search;
        this.movies.forEach( (element:movieObject) => {
            if(store.watchList.indexOf(element.Title)=== -1)
                element.watch=false;
            else
                element.watch=true;
        });
      });
    },
  },
});
</script>
<style scoped>
.searchComponent {
  margin: 4em;
}
.searchButton {
  margin-left: 1em;
  padding: 0em 2em 0em 2em;
}
.searchButton:hover {
  cursor: pointer;
}
</style>