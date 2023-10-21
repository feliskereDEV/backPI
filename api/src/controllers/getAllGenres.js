const {Genre} = require('../db');
const axios = require("axios");
const apiKey = "3fd86bfcbc28470abf3860189f3f7384";
const getAllGenres = async ()=>{
    const genresDb = await Genre.findAll();
    
    if(!genresDb.length){
        const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`);
        const genres = [];
        data.results.forEach( (e) => genres.push(e.name));
        genres.forEach(async (g) =>{
            await Genre.findOrCreate({
                where: {name: g}
            })
        })
        return genres;
    }
    return genresDb
}


module.exports = getAllGenres;