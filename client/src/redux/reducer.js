import{
    GET_ALL_GENRES, GET_PLATFORMS,
} from "./actions/actionsType"

const initialState = {
    allVideogames: [],
    genres: [],
    platforms: [],


};

export default function reducer ( state = initialState, {type, payload}){
    switch(type){
        case GET_ALL_GENRES:
            return{
                ...state,
                genres: payload,
            }
        
        case GET_PLATFORMS:
            return{
                ...state,
                platforms: payload,
            }


            default:{
               return state;
            }
    }
}