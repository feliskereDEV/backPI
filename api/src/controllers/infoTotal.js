const getVideogameBd = require ("../controllers/getVideogameBd")
const getVideogamesApi = require ("../controllers/getVideogameApi")
 const infoTotal = async () =>{
    // para unir mis dos variables guardo en una variable la ejecucción de mis funciones:
    const apiData = await getVideogamesApi();
    const dbData = await getVideogameBd();
    // ahora concateno mis dos constantes contenedoras de funciones
    const allVideogames = [...apiData, ...dbData]
    return allVideogames; 
 }

 module.exports = infoTotal;