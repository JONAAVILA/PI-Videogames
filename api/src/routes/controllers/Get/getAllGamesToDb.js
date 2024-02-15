const  allGamesToDb = require('./../../handlers/handlerGet/allGamesToDb');

const getAllGamesToDb = async (req, res)=>{
    try {
        const allGames = await allGamesToDb()
        return res.status(200).json(allGames)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports = getAllGamesToDb;