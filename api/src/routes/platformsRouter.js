

const {Router} = require ("express")
const getPlatforms = require ("../controllers/getPlatforms")
const platformsRouter = Router();


platformsRouter.get("/", getPlatforms)


module.exports = platformsRouter;
