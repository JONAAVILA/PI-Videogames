const { Videogames, Genres } = require('./../../../db');

const createNewGame = async (name,
                             description,
                             platforms,
                             release,
                             rating,
                             genres)=>{
    try {
        if(!name || !description || !platforms || !release || !rating || !genres){
            throw new Error('Parameters are missing')
        }
        const newGame = await Videogames.findOrCreate({

        })
    } catch (error) {
        return {error: 'fails to create'}
    }
}

module.exports = createNewGame;