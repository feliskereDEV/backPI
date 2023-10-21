

const {Router} = require ("express")
const getGenreHandler = require ("../handlers/getGenreHandler")
const genreRouter = Router();


genreRouter.get("/", getGenreHandler)


module.exports = genreRouter;