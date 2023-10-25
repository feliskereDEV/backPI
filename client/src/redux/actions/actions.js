import axios from "axios"
import {
    GET_ALL_GENRES,
    GET_PLATFORMS,
    POST_GAMES,
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAME_BY_NAME,
    GET_VIDEOGAME_BY_ID,
    CLEAR_DETAIL,
    SORT_RATING_DESCENDING_ORDER,
    SORT_RATING_ASCENDING_ORDER,
    SORT_NAME_DESCENDING_ORDER, 
    SORT_NAME_ASCENDING_ORDER,
    NO_SORT
} from "./actionsType";


const getAllGenres = () =>{
        return async (dispatch)=>{
            try {
                const apiData = await axios ("/genre")
                const genre = apiData.data
                dispatch({
                    type: GET_ALL_GENRES,
                    payload: genre
                })
            } catch (error) {}

        }
}

const getVideogameByName = (name) => {
    return async (dispatch) =>{
        try {
            const apiData = await axios.get(`/videogames?name=${name}`)
            const getName = apiData.data
            dispatch({
                type: GET_VIDEOGAME_BY_NAME,
                payload: getName
            })
        } catch (error) {

        }
    }
} 
const getVideogameById = (id)=>{
    return async (dispatch)=>{
        try {
            const apiData = await axios.get(`/videogames/${id}`)
            const getId = apiData.data
            dispatch({
                type: GET_VIDEOGAME_BY_ID,
                payload: getId
            })
        } catch (error) {

        }
    }
}

const getPlatforms = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get("/platforms")
            console.log(data)
            return dispatch({
                type: GET_PLATFORMS,
                payload:data 
            })
        } catch (error) {

        }
    }
}
const getAllVideogames = ()=>{
    return async (dispatch) =>{
        try {
            const apiData = await axios.get("/videogames")
            const games = apiData.data
            dispatch({
                type: GET_ALL_VIDEOGAMES,
                payload: games
            })
        } catch (error) {
            return console.log(error)
        }
    }
}

const sort = (sortType) =>{
    switch(sortType){
        case "ratingAsc":
            return{
                type: SORT_RATING_ASCENDING_ORDER
            }
        case "ratingDesc":
            return{
                type: SORT_RATING_DESCENDING_ORDER
            }
        case "nameAsc":
            return{
                type: SORT_NAME_ASCENDING_ORDER
            }
        case "nameDesc":
            return{
                type: SORT_NAME_DESCENDING_ORDER
            }
        default:
            return{
                type: NO_SORT
            }
        }
    }
    const clearDetail = ()=>{
        return {
            type: CLEAR_DETAIL,
            payload: [],
        }
    }
    
    const postVideogame = (form) =>{
    return async (dispatch) => {
        try {
            await axios.post("/videogames", form)
            return dispatch({
                type: POST_GAMES,
            })
        } catch (error) {
            return console.log(error)
        }
    }
}
    
    export { 
        getVideogameById,
        getAllGenres,
        getVideogameByName,
        getPlatforms,
        postVideogame,
        getAllVideogames,
        clearDetail,
        sort,

    
    }