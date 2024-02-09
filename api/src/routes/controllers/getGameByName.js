const gameByName = require('./../handlers/gameByName');

const getGameByName = async (req, res)=>{
    try {
        const { name } = req.query
        const response = await gameByName(name)
        console.log(name)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports = getGameByName;