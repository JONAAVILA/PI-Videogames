const { Videogame, Genres } = require('./../../../db');

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
        const newGame = await Videogame.create({
                name: name,
                description: description,
                platform: platforms,
                date: release,
                rating: rating,
        })

        const foundGenres = await Genres.findAll({
            where: { name: genres }
        });

        for (const genre of foundGenres) {
            await newGame.addGenre(genre);
        }
        
        return newGame
    } catch (error) {
        return {error:error.message}
    }
}

module.exports = createNewGame;