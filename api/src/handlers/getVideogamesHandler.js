const {Videogame, Genre} = require ("../db")
const infoTotal = require ("../controllers/infoTotal")
const getVideogamesHandler = async (req, res) =>{
    try {
        const {name} = req.query;
        const response = await infoTotal(name);
        res.status(200).json(response)

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
} 

module.exports = getVideogamesHandler;