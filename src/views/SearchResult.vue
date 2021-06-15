<template>
  <div>
    <div v-if="movieResult==='limitSearch'">
          Too much search result. Borden your query.
      
    </div>
    <div class="movieContainer"  v-else-if="movieResult==='okay'">
     <div class="movieItem" v-for="movie in movies" :key="movie.imdbID">
        <img :src="movie.Poster"/>
        <h2>{{movie.Title}}</h2>
        <p>{{movie.Year}}</p>
      </div>
    </div>
    <div v-else-if="movieResult===''">
        Input movie name to see result.
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: {
    movies: Array,
    movieResult: String,
    
  },
};
</script>

<style scoped>
.movieContainer
{
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
}
.movieItem
{
    padding:1em;
    flex-grow: 1;
}
</style>