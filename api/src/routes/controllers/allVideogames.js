const { Videogame } = require('./../../db');

const allVideoGames = ()=>{
        const allGames = Videogame.finAll()
        if(allGames === undefined) throw new Error({error: 'Videogames not found'})
        return allGames
}

module.exports = allVideoGames