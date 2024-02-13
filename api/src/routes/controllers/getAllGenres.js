const allGenres = require('./../handlers/allGenres');

const getAllGenres = async (req, res)=>{
    try {
        const genres = await allGenres()
        return res.status(200).json(genres)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports = getAllGenres;