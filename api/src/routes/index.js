const { Router } = require('express');
const getAllVideogames = require('./controllers/Get/getAllGames');
const getIdGames = require('./controllers/Get/getIdGames');
const getGameByName = require('./controllers/Get/getGameByName');
const getAllGenres = require('./controllers/Get/getAllGenres');
const getAllGamesToDb = require('./controllers/Get/getAllGamesToDb');

const router = Router();

router.get('/videogames',getAllVideogames)
router.get('/videogames/db',getAllGamesToDb)
router.get('/videogames/:idGame', getIdGames)
router.get('/search', getGameByName)
router.get('/genres', getAllGenres)

module.exports = router;

