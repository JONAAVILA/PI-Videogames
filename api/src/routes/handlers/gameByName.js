const axios = require('axios');
const URL = 'https://api.rawg.io/api/games?'
const { Videogame } = require('./../../db');
const { APY_KEY } = process.env;

const gameByName = async (name)=>{
    try {
        let nameComplete = "" 
    
        for( word of name.split(" ") ){
            nameComplete += word[0].toUpperCase() + word.slice(1) + " "
         }
      
        const correction = nameComplete.trim()
        const gameApi = await axios(`${URL}key=${APY_KEY}&search=${correction}`)
        console.log(gameApi)

        if(!gameApi) {
            const gameDb = await Videogame.findAll(correction)
            if(!gameDb) throw new Error('Invalid name')
            else return gameDb
        }
        return gameApi.data

    } catch (error) {
        return {error: error.message}
    }
    
}

module.exports = gameByName;