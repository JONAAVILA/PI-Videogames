const { Videogame } = require('../../db');
const axios = require('axios');
const { API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/games?';

const allVideoGames = async (page)=>{
        if(page === 1){
                const allGames = await axios(`${URL}key=${API_KEY}`)
                return allGames.data.results
        }
        const allGames = await axios(`${URL}key=${API_KEY}&page=${page}`)
        return allGames.data.results
}

module.exports = allVideoGames;