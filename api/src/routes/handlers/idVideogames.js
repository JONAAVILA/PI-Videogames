const { Videogames } = require('./../../db');

const idVideogames = async (idGame)=>{
    const game = await Videogames.findByPk(idGame)
    if(!game) throw new Error('Game not found')
    return game
}

module.exports = idVideogames;