const createNewGame = require('./../../handlers/handlerPost/handleNewGame');

const CreateGame = async (req, res)=>{
    try {
        const { name,
                description,
                platforms,
                release,
                rating,
                genres } = req.body
        const newGame = await createNewGame(name,
                                            description,
                                            platforms,
                                            release,
                                            rating,
                                            genres)
        return res.status(200).json(newGame)
    } catch (error) {
        return res.status(200).json({error:error.message})
    }
}

module.exports = CreateGame;