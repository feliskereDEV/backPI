const getVideogameId = require ("../controllers/getId")
const getVideogameIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getVideogameId(id);
        res.status(200).json(response);
    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}


module.exports = getVideogameIdHandler;