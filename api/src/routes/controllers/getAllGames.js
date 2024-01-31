const allVideoGames = require('../handlers/allVideogames');

const getAllVideogames = async (req, res)=>{
    try {
        const videoGames = await allVideoGames()
        res.status(200).json(videoGames)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = getAllVideogames

