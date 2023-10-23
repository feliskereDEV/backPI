import axios from "axios"
import {
    GET_ALL_GENRES
} from "./actionsType";


const getAllGenres = () =>{
        return async (dispatch)=>{
            const apiData = await axios ("/genre")
            const genre = apiData.apiData
            dispatch({
                type: GET_ALL_GENRES,
                payload: genre
            })
        }
}


export { getAllGenres }