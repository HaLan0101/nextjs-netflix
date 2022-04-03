const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "b13f91605ac7a7fedaf84bec9ab136a0";
export default{
    getMovies(){
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}`)
        .then((res) => res.json());
        },
    getMovie(id){
        return fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}`)
        .then((res) => res.json());
        },
    getUpcoming(){
        return fetch(`${apiUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => res.json());
        },
    getPopular(){
        return fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => res.json());
    },
    getGenres(id){
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}&language=en-US&page=1`)
        .then((res) => res.json());
    }

}
