const axios = require('axios');
const { APY_KEY } = process.env;
const { Videogame } = require('../db');
const URL = `https://api.rawg.io/api/games?key=${APY_KEY}`;

const VideogamesToDb = async ()=>{
    try {
        const response = await axios(URL)
    
        if(!response.data ) throw new Error(response)
        
        const apiData = response.data.results?.map(async element => {
            const platforms = element.platforms.map(e => e.platform.name)
            await Videogame.findOrCreate({
                where: {
                    name: element.name,
                    platform: platforms,
                    image: element.background_image,
                    date: element.released,
                    rating: element.rating
                },
            });
        });
        await Promise.all(apiData)
        return apiData
    } catch (error) {

        return {error: error.message}
    }

}

module.exports = {
    VideogamesToDb
};