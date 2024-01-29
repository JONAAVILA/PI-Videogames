const axios = require('axios');
const { APY_KEY } = process.env;
const { Videogame } = require('../db');

const VideogamesToDb = async ()=>{
    try {
        const response = await axios(`https://api.rawg.io/api/games?key=${APY_KEY}`)
    
        if(!response.data ) throw new Error(response)
        
        const apiData = response.data.results?.map( async element => {
            await Videogame.findOrCreate({
                where:{
                    name: element.name,
                    description: element.platforms[0].requirements_en['minimum'] !== null? element.platforms[0].requirements_en['minimum']: "description not found",
                    platform: element.platforms[0].name,
                    image: element.platforms[0].image_background,
                    date: element.released,
                    rating: element.rating
                },
            })
            await Promise.all(apiData)
            return apiData
        })
    } catch (error) {

        return {error: error.message}
    }

}

module.exports = {
    VideogamesToDb
};