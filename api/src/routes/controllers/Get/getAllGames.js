const allVideoGames = require('../../handlers/handlerGet/allVideogames');

const getAllVideogames = async (req, res)=>{
    try {
        const { page } = req.query
        const videoGames = await allVideoGames(page)
        res.status(200).json(videoGames)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = getAllVideogames

