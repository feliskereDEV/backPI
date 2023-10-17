const { Router } = require('express');
const videogamesRouter = require("./videogamesRouter")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.use("/videogames", videogamesRouter)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
