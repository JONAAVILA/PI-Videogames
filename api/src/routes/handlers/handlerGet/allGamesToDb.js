const { Videogames } = require('./../../../db');

const allGamesToDb = async ()=>{
    try {
        const allGames = await Videogames.findAll()
        return allGames
    } catch (error) {
        return {error: 'Empty database'}
    }
}

module.exports = allGamesToDb