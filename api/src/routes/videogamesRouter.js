const {Router} = require("express")
const getVideogamesHandler = require("../handlers/getVideogamesHandler")
const getVideogameIdHandler = require ("../handlers/getVideogamesIdHandler")
const postVideogame = require ("../handlers/postVideogame")
const videogamesRouter = Router();




videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:id", getVideogameIdHandler)
videogamesRouter.post("/", postVideogame)



module.exports = videogamesRouter;