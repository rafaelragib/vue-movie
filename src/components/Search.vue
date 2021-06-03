<template>
    <div class="searchComponent">
        <h3>Search movie via Title</h3>
    <form @submit.prevent="" >
        <input v-model="searchquery" placeholder="The Dark Knight" />
        <button @click="searchMovie" class="searchButton">Search </button>
    </form>
    <search-result :movies="movies" :movieResult="movieResult"></search-result>
   
    </div>
</template>

<script>
import SearchResult from './SearchResult'

    export default {
        name:'Search',
        components:{SearchResult},
        data(){
            return{
            searchquery:'',
            movies:[],
            movieResult:""
            }
        },
        methods: {
           async fetchMovie()
            {
                try{
               
                const response= await fetch(`${process.env.VUE_APP_ENV_VARIABLE}s=${this.searchquery}&type=movie&${process.env.VUE_APP_API_KEY}`);
                //console.log(response);
                return response.json();
                
                }
                catch(error)
                {
                    console.log(error);
                }
                
            },
            searchMovie()
            {
                 this.movies =[];
                 this.fetchMovie().then(data=>
                 {
                     //console.log(typeof data.Response);
                     if(data.Response==='False'){
                         console.log('TOo much');
                         this.movieResult="limitSearch";
                     }
                        
                     else{
                         this.movieResult="okay";
                        this.movies=data.Search;
                     }
                        

                 })
            }
        },
    }
</script>
<style scoped>
.searchComponent
{
    margin:1em;
}
.searchButton
{
    margin-left: 1em;
    padding:0em 2em 0em 2em;
}
.searchButton:hover
{
    cursor: pointer;
}
</style>