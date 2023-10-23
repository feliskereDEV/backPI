import{
    GET_ALL_GENRES,
} from "./actions/actionsType"

const initialState = {
    allVideogames: [],
    genres: [],

};

export default function reducer ( state = initialState, {type, payload}){
    switch(type){
        case GET_ALL_GENRES:
            return{
                ...state,
                genres: payload,
            }



            default:{
               return state;
            }
    }
}