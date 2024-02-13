const { Videogame } = require('../../db');
const axios = require('axios');
const { API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/games?';

const allVideoGames = async ()=>{
        const allGames  = await axios(`${URL}key=${API_KEY}`)
        
}

module.exports = allVideoGames;