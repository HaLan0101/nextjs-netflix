const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "b13f91605ac7a7fedaf84bec9ab136a0";
export default{
    getTrending(){
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}`)
        .then((res) => res.json());
        },
    getActionMovies(){
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=28`)
        .then((res) => res.json());
        },
    getVideoMovies(){
        return fetch(`${apiUrl}/movie/{movie_id}/videos?api_key=${apiKey}&with_genres=28`)
        .then((res) => res.json());
        },
}
