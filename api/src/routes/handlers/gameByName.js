const axios = require('axios');
const URL = 'https://api.rawg.io/api/games?search='
const { Videogame } = require('./../../db');

const gameByName = async (name)=>{
    try {
        const nameComplete = "" 
    
        for( word of name.split(" ") ){
            nameComplete += word[0].toUpperCase() + word.slice(1) + " "
         }
      
        const correction = nameComplete.trim()
        const gameApi = await axios(`${URL}${correction}`)
        console.log(gameApi)

        if(!gameApi) {
            const gameDb = await Videogame.findAll(correction)
            if(!gameDb) throw new Error('Invalid name')
            else return gameDb
        }

    } catch (error) {
        return {error: error.message}
    }
    
}

module.exports = gameByName;