const { Router } = require('express');
const videogamesRouter = require("./videogamesRouter");
const platformsRouter = require ("./platformsRouter")
const genreRouter = require ("./genresRouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.use("/videogames", videogamesRouter)
router.use("/genre", genreRouter)
router.use("/platforms", platformsRouter)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
