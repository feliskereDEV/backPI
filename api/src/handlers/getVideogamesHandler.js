const {Videogame, Genre} = require ("../db")
const infoTotal = require ("../controllers/infoTotal")
const getName = require ("../controllers/getName")
const getVideogameBd = require ("../controllers/getVideogameBd")


const getVideogamesHandler = async (req, res, next) =>{
    const {name} = req.query;
    const response = await infoTotal(name)
    
    if (name){
        try {
           const searchApi = await getName(name)
           const searchDb =  await getVideogameBd()

           let foundGamesDb = searchDb.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
           let allSearch = foundGamesDb.concat(searchApi)
           allSearch.length ? res.status(200).json(allSearch.slice(0,15)) : res.status(400).send("No hay videojuego con dicho nombre")
        } catch (error) {
            next(error)
        }
    }

    else{
       try {
        res.status(200).json(response)
       } catch (error) {
        return res.status(400).json({error: error.message})
       }
    }
} 

module.exports = getVideogamesHandler;

















//  const {Videogame, Genre} = require ("../db")
//  const infoTotal = require ("../controllers/infoTotal")
//  const getVideogamesHandler = async (req, res) =>{
//     try {
//         const {name} = req.query;
//         const response = await infoTotal(name);
//         res.status(200).json(response)

//    } catch (error) {
//          return res.status(400).json({error: error.message})
//      }
//  } 

//  module.exports = getVideogamesHandler;