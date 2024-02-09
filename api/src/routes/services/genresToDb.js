const { Genres } = require('./../../db');
const axios = require('axios');
const URL = 'https://api.rawg.io/api/genres';
const { APY_KEY }= process.env;

const genresToDb = async ()=>{
    try {
        const response = await axios(`${URL}?key=${APY_KEY}`)
        if(!response) throw new Error('Genres not found')

        const reponseApi = response.data.results.map( async element => {
            await Genres.findOrCreate({
                where:{
                    name: element.name
                }
            })
        })
        await Promise.all(reponseApi)
        return reponseApi

    } catch (error) {
        return {error:error.message}
    }
}

module.exports = genresToDb;