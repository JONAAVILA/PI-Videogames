const axios = require('axios');
const { APY_KEY } = process.env;
const { Videogame } = require('../db');

const VideogamesToDb = async ()=>{
    try {
        const response = await axios(`https://api.rawg.io/api/games?key=${APY_KEY}`)
    
        if(response === undefined ) throw new Error(response)
        
        const apiData = response.data.results?.map( async element => {
            await Videogame.create({
                where:{
                    name: element.name === undefined ? name: 'no name',
                },
            })

            await Promise.all(apiData)
            return apiData
        })
        console.log(apiData)
    } catch (error) {
        return {error: error.message}
    }

}

module.exports = {
    VideogamesToDb
};