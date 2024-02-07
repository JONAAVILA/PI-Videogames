const { Videogame } = require('./../../db');
const axios = require('axios');
const { APY_KEY } = process.env;

const idVideogames = async (idGame)=>{
    
    const game = await axios(`https://api.rawg.io/api/games/${idGame}?key=${APY_KEY}`)
    if(!game){
        const gameDb = await Videogame.findByPk(idGame)
        return gameDb
    }
    return game.data   
}

module.exports = idVideogames;
