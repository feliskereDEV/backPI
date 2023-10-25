const {Videogame, Genre} = require ("../db")
const postVideogame = async (req, res)=>{
    const {name, description, platforms, image, released, rating, genres} = req.body
    const imageUrl = req.body.image;
    if (!name || !description || !platforms || !image || !released || !rating || !genres){
        return res.status(400).json({ error: 'Missing required fields!' });
    }
    try {
        const newGame = await Videogame.create({
            name,
            description,
            platforms,
            image: imageUrl,
            released,
            rating,
        });
        const addedGenres = [];
        for (const genreName of genres){
            try {                
                const genre = await Genre.findOne({where: {name: genreName}});
                if(genre){
                    await newGame.addGenre(genre)
                    addedGenres.push(genre.name)
                } else{
                    console.error("Invalid genre!")
                }
            } catch (error) {
                console.error("Error adding Genre", error)
                
            }
        }
        res.status(200).json({newGame, addedGenres})
    } catch (error) {
        console.error("Error on Creating", error)
        return res.status(500).json({error: "Videogame invalid"})
    }
}

module.exports = postVideogame;