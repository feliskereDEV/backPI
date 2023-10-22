/* #### **📍 POST | /videogames**

-  Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno). */




/*
const { Pokemon } = require("../db");
const image = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/6a/latest/20230115164405/Pok%C3%A9_Ball_EP.png/130px-Pok%C3%A9_Ball_EP.png"
const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

const createPokemon = async (pokemon) => {
    const repeated1 = await Pokemon.findAll({where: { name: pokemon.name }})
    if(repeated1.length) throw new Error("that pokemon was already created")
    if(pokemon.image !== "" && !regexImage.test(pokemon.image)) throw new Error("invalid image")
    if(pokemon.image === "" || pokemon.image === null || pokemon.image === undefined) pokemon.image = image;

    if(Number(pokemon.speed) <= 0) pokemon.speed = null;
    if(Number(pokemon.height) <= 0) pokemon.height = null;
    if(Number(pokemon.weight) <= 0) pokemon.weight = null;
    if(Number(pokemon.hp > 300)) throw new Error("too many hp")
    if(Number(pokemon.attack > 200)) throw new Error("too many attack")
    if(Number(pokemon.defense > 200)) throw new Error("too many defense")
        if(!pokemon.types.length) throw new Error("types cannot be null");
        if(pokemon.types.length > 3) throw new Error("too many types");

        const newPokemon = await Pokemon.create(pokemon);
        await newPokemon.addType(pokemon.types)
        return newPokemon;
}

module.exports = createPokemon;
*/


const { Videogame } = require("../db");

const createVideogame = async (videogame) => {
    const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg|webp)/;
    const { name, description, released, rating, platforms, genres, background_image } = videogame;
    const repetido = await Videogame.findOne({where: { name: name, released: released , genres: genres, platforms: platforms}})
    const generoExiste = await Videogame.findOne({where: { genres: genres}})
    if(!name || !description || !released || !rating || !platforms || !genres || !background_image) throw new Error("Faltan datos del videojuego")
    if(!genres.length && generoExiste)                                                              throw new Error("El videojuego debe tener al menos un género")
    if(!platforms.length)                                                                           throw new Error("El videojuego debe tener al menos una plataforma")
    if(!name.length)                                                                                throw new Error("El nombre del videojuego no puede estar vacío")
    if(!description.length)                                                                         throw new Error("La descripción del videojuego no puede estar vacía")
    if(!released.length)                                                                            throw new Error("La fecha de lanzamiento del videojuego no puede estar vacía")
    if(!rating.length)                                                                              throw new Error("El rating del videojuego no puede estar vacío")
    if(!platforms.length)                                                                           throw new Error("El videojuego debe tener al menos una plataforma")
    if(!background_image.length && !regexImage.test(background_image))                              throw new Error("La imagen de fondo debe ser válida")
    if(repetido)                                                                                    throw new Error("El videojuego ya existe")

    const newVideogame = await Videogame.create(videogame);
    return newVideogame;
}

module.exports = createVideogame;