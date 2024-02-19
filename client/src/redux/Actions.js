import { ALL_VIDEOGAMES_API } from "./ActionsTypes";
import axios from "axios";

export const allVideogamesApi = ()=>{
    const URL = 'http://localhost:3001/videogames'

    return async (dispatch)=>{
        const response = await axios(`${URL}?page=1`)
        return dispatch({
            type:ALL_VIDEOGAMES_API,
            payload:response.data
        })
    }
}
