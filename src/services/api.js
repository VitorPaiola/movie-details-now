import axios from "axios"

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=3542457d20eb20652a46fc22c6450be5&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api