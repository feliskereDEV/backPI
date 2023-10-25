import{
    GET_ALL_GENRES,
    GET_PLATFORMS,
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAME_BY_NAME,
    GET_VIDEOGAME_BY_ID,
    CLEAR_DETAIL,
    SORT_NAME_ASCENDING_ORDER,
    SORT_NAME_DESCENDING_ORDER,
    SORT_RATING_ASCENDING_ORDER,
    SORT_RATING_DESCENDING_ORDER,
    NO_SORT,
} from "./actions/actionsType"

const initialState = {
    allVideogames: [], // juegos DB / API
    videogames: [], // 
    genres: [], // generos
    platforms: [], // plataformas
    videogamesFiltered: [], // id / name 
    detailGame: [], // 
    preSort: [], // pasamanos de juegos


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

        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                allVideogames: payload,
            }

        case GET_VIDEOGAME_BY_NAME:
            return{
                ...state,
                videogamesFiltered: payload

            }
case GET_VIDEOGAME_BY_ID:
            return{
                ...state,
                detailGame: payload
            }
        case CLEAR_DETAIL:
            return{
                ...state,
                detailGame: payload
            }
        case SORT_NAME_ASCENDING_ORDER:
            return{
                ...state,
                preSort: (!state.preSort.length ? [...state.videogames] : [state.preSort]),
                videogames: [...state.videogames].sort(
                    (vg1, vg2) => {
                        const nameA = vg1.name.toUpperCase();
                        const nameB = vg2.name.toUpperCase();
                        if (nameA < nameB) return -1
                        if (nameA > nameB) return 1
                        return 0
                    })}
case SORT_NAME_DESCENDING_ORDER:
            return {
                ...state,
                preSort: (!state.preSort.length ? [...state.videogames] : [state.preSort]),
                videogames: [...state.videogames].sort(
                    (vg1, vg2) => {
                        const nameA = vg1.name.toUpperCase();
                        const nameB = vg2.name.toUpperCase();
                        if (nameA < nameB) return 1
                        if (nameA > nameB) return -1
                        return 0
                    }
                )
            }
        case SORT_RATING_ASCENDING_ORDER:
            return{
                ...state,
                preSort: (!state.preSort.length ? [...state.videogames]: [state.preSort]),
                videogames: [...state.videogames].sort(
                    (vg1, vg2) => {
                        const nameA = vg1.name.toUpperCase();
                        const nameB = vg2.name.toUpperCase();
                        if (nameA < nameB) return -1
                        if (nameA > nameB) return 1
                        return 0
                    }
                )
            }

        case SORT_RATING_DESCENDING_ORDER:
            return {
                ...state,
                preSort: (!state.preSort.length ? [...state.videogames] : [state.preSort]),
                videogames: [...state.videogames].sort(
                    (vg1, vg2) => {
                        const nameA = vg1.name.toUpperCase();
                        const nameB = vg2.name.toUpperCase();
                        if (nameA < nameB) return 1
                        if (nameA > nameB) return -1
                        return 0
                    }
                )
            }


            default:{
               return state;
            }
    }
}