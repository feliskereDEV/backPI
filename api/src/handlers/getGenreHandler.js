const getAllGenres = require ("../controllers/getAllGenres")
const getGenreHandler = async (req, res) =>{
    try {
        const genre = await getAllGenres();
        console.log(genre)
        return res.status(200).json(genre)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports = getGenreHandler;