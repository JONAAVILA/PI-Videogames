const { Videogame } = require('../../db');

const allVideoGames = async ()=>{
        const allGames = await Videogame.findAll()
        if(!allGames) throw new Error({error: 'Videogames not found'})
        return allGames
}

module.exports = allVideoGames;