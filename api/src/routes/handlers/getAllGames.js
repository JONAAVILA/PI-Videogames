const { allVideoGames } = require('./../controllers/allVideogames');

const getAllVideogames = ()=>{
    try {
        const videoGames = allVideoGames()
        if(videoGames === undefined) throw new Error(videoGames)
        return videoGames
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllVideogames