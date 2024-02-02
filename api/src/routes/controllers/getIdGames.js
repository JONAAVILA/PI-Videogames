const idVideogames = require('./../handlers/idVideogames')

const getIdGames = async (req, res)=>{
    try {
        const { idGame } = req.params
        if(idGame === null) throw new Error('Invalid id game')
        const game = await idVideogames(idGame)
        console.log(game)
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = getIdGames;


