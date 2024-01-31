const { Router } = require('express');
const getAllVideogames = require('./controllers/getAllGames');


const router = Router();

router.get('/videogames',getAllVideogames)

module.exports = router;
