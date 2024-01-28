const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame } = require('../db');

const VideogamesToDb = async ()=>{
    try {
        const response = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)
        if(response === undefined) throw new Error(response)
        
        const apiData = response.data?.map( async element => {
            await Videogame.findOrCreate({
                where:{
                    name: element.results['name'],
                },
                row: false
            })

            await Promise.all(apiData)
            return apiData
        })
    } catch (error) {
        return {error: error.message}
    }

}

module.exports = VideogamesToDb;