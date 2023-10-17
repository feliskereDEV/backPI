const {Videogame, Genres} = require("../db")
const axios = require("axios")

const getVideogameBd = async ()=>{
    //busco en mi db
    const dataDB = await Videogame.findAll({include:{ //SELECT * FROM videogame
        model: Genres,
        attributes: ["name"],
        through: {
            attributes: []
        }
    }});
// mapeo la data encontrada en el db
    const cleanData =  dataDB.map((clean) =>{
        const genresApi = clean.Genres.map(g => g.name);
        return {
            id: clean.id,
            name: clean.name,
            platforms: clean.platforms,
            image: clean.image,
            rating: clean.rating,
            genres: genresApi
        }
    })
    return cleanData;
};


const getVideogamesApi = async () => {
    // const videogameValidate = await Videogame.findAll();
    // if (videogameValidate.length = 0){
            let url =`https://api.rawg.io/api/games?key=3fd86bfcbc28470abf3860189f3f7384`;
            let vGames = [];
           try {
            for (let i=0; 1<5; 1++) { // se recorre el array con un for
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


// Uniendo Info de DB/API

const infoTotal = async () =>{
    // para unir mis dos variables guardo en una variable la ejecucción de mis funciones:
    const apiData = await getVideogamesApi();
    const dbData = await getVideogameBd();
    // ahora concateno mis dos constantes contenedoras de funciones
    const allVideogames = [...apiData, ...dbData]
    return allVideogames; 
}












// const getAllVideogames = async()=>{
//     const videogameValidate = await Videogame.findAll();
//     if (videogameValidate.length = 0){
//     let rowgames = await axios.get(`https://api.rawg.io/api/games?key=3fd86bfcbc28470abf3860189f3f7384`)
    
//     let juego = await rowgames.data.map((g)=>{
        
//         let games = {
//             id: g.id,
//             name: g.name,
//             description: g.description,
//             platforms: g.platforms,
//             image: g.image,
//             releaseDate: g.releaseDate,
//             rating: g.rating,
//         };
//         Videogame.findOrCreate ({where: games})
//     })};
// }


// module.exports = getAllVideogames;