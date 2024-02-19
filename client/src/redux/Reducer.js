import { ALL_VIDEOGAMES_API } from "./ActionsTypes"

const initialState ={
    allGamesApi: [],
    allGamesDb: []
}

const rootReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ALL_VIDEOGAMES_API:
            return{
                ...state,
                allGamesApi:action.payload
            }
    
        default:
            return state
    }
}

export default rootReducer;