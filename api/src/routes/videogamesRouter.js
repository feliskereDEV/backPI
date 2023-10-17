const {Router} = require("express")
const getVideogamesHandler = require("../handlers/getVideogamesHandler")
const videogamesRouter = Router();

// videogamesRouter.get("/", getVideogamesHandler);



module.exports = videogamesRouter;