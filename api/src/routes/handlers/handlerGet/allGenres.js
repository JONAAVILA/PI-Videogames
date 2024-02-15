const { Genres } = require('../../../db');

const allGenres = async ()=>{
    try {
        const genresDb = await Genres.findAll()
        return genresDb
    } catch (error) {
        return {error:'Genres not found'}
    }
}

module.exports = allGenres;