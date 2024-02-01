const { Router } = require('express');
const getAllVideogames = require('./controllers/getAllGames');
const getIdGames = require('./controllers/getIdGames');



const router = Router();

router.get('/videogames',getAllVideogames)
router.get('/videogames/:id', getIdGames)

module.exports = router;

