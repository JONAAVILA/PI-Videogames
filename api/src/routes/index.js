const { Router } = require('express');
const getAllVideogames = require('./controllers/getAllGames');
const getIdGames = require('./controllers/getIdGames');
const getGameByName = require('./controllers/getGameByName');

const router = Router();

router.get('/videogames',getAllVideogames)
router.get('/videogames/:idGame', getIdGames)
router.get('/search', getGameByName)

module.exports = router;

