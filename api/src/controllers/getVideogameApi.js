const {Videogame, Genre} = require("../db")
const axios = require("axios")

const getVideogamesApi = async () => {
    // const videogameValidate = await Videogame.findAll();
    // if (videogameValidate.length = 0){
            let url =`https://api.rawg.io/api/games?key=3fd86bfcbc28470abf3860189f3f7384`;
            let vGames = [];
           try {
            for (let i=0; i<5; i++) { // se recorre el array con un for
            const respuesta = await axios.get(url) // se realiza la peticion
            respuesta.data.results.map(v => {
                vGames.push({
                    id: v.id,
                    name: v.name,
                    image: v.background_image,
                    rating: v.rating,
                    platforms: v.platforms?.map(el => el.platform.name),
                    genres: v.genres?.map(el => el.name)
                })
            });
            url = respuesta.data.next
            }
            return vGames;

           } catch (error) {
            console.log("Hay un error en getVideogamesApi")
           }
}

module.exports = getVideogamesApi;