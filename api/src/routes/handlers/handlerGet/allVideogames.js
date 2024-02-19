const axios = require('axios');
const {API_KEY} = process.env;
const URL = 'https://api.rawg.io/api/games?';

const allVideoGames = async (page)=>{
        if(page === 1){
                const allGames = await axios(`${URL}key=f21ce25957aa4e27a1e916fa3ebb14cc`)
                return allGames.data.results
        }
        const allGames = await axios(`${URL}key=f21ce25957aa4e27a1e916fa3ebb14cc&page=${page}`)
        return allGames.data.results
}

module.exports = allVideoGames;