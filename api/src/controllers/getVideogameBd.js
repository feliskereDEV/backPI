const {Videogame, Genre} = require("../db")

const getVideogameBd = async ()=>{
    //busco en mi db
    const dataDB = await Videogame.findAll({include:{ //SELECT * FROM videogame
        model: Genre,
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

module.exports = getVideogameBd;