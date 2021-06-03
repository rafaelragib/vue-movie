<template>
  <div>
    <div v-if="movieResult==='limitSearch'">
          Too much search result. Borden your query.
      
    </div>
    <div v-else-if="movieResult==='okay'">
     <div v-for="movie in movies" :key="movie.imdbID">
        
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
  data(){
     
  },
  computed:
  {
     
  }
};
</script>

<style scoped>
</style>