const {Router} = require("express")
const getVideogamesHandler = require("../handlers/getVideogamesHandler")
const getVideogameIdHandler = require ("../handlers/getVideogamesIdHandler")
const videogamesRouter = Router();




videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:id", getVideogameIdHandler)



module.exports = videogamesRouter;