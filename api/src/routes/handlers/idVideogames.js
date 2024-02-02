const { Videogame } = require('./../../db');
const axios = require('axios');
const { APY_KEY } = process.env;

const idVideogames = async (idGame)=>{
    if(idGame > 20){
        const game = await axios(`https://api.rawg.io/api/games/${idGame}?key=${APY_KEY}`)
        return game.data
    }
    const game = await Videogame.findByPk(idGame)
    if(!game) throw new Error('Game not found')
    return game
}

module.exports = idVideogames;
