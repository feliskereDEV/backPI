import axios from "axios"
import {
    GET_ALL_GENRES,
    GET_PLATFORMS,
    POST_GAMES
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


const postGame = (form) =>{
    return async (dispatch) => {
        try {
            const {data} = await axios.post("videogames", form)
        } catch (error) {
            
        }
    }
}


export { getAllGenres, getPlatforms, postGame }