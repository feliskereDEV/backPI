
import React, { useEffect } from 'react'
import styles from "./form.module.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllGenres, getPlatforms, postGame } from '../../redux/actions/actions'
import {useSelector} from "react-redux"
import { validate } from './validate'
import { NavLink } from "react-router-dom/cjs/react-router-dom"
const Form = () => {
    const dispatch = useDispatch();
    
    const genres = useSelector((state)=> state.genres)

    const platforms = useSelector((state)=> state.platforms)
// Cuando se monta mi componente hago peticion a /genre asi me trae los géneros
useEffect(() => {
    if(platforms.length === 0){
        dispatch(getPlatforms());
    } 
    if (genres.length === 0) {
        dispatch(getAllGenres());
    }
},[dispatch])



 
    //seteo mi form sin datos
    const [form, setForm] = useState({
        name: "",
        image: "",
        description:"",
        platforms:[],
        releaseDate:"dd/mm/aaaa",
        rating:"0",
        genres:[]
    })

    useEffect(()=>{
        const checkFormComplete = () => {
            if(
                !form.name          ||
                !form.image         ||
                !form.description   ||
                !form.platforms     ||
                !form.releaseDate   ||
                !form.rating        ||
                !form.genres )
                {
                setFormComplete(false)
            } else{
                setFormComplete(true)
            }
        }
        checkFormComplete()
    }, [form])

    const [created, setCreated] = useState("");

    const [formComplete, setFormComplete] = useState(false);
    
    

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        description:"",
        platforms:"",
        releaseDate:"",
        rating:"",
        genres:"",
    })

    const clearForm = () => {
        setForm({
            name: "",
            image: "",
            description:"",
            platforms:"",
            releaseDate:"dd/mm/aaaa",
            rating:"0",
            genres:[]
        })
    }

    const handleInputs = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setErrors(validate({...form, [e.target.name]: e.target.value}))
    }

    const [selectedGenres, setSelectedGenres] = useState([]);
    
    const removeGenre = (genreToRemove) => {
        setSelectedGenres((prevGenres) => prevGenres.filter((genre) => genre !== genreToRemove));
    };
      
    
    const addGenreToList = () => {  
        const selectedGenre = document.querySelector('select[name="genres"]').value;
        if (selectedGenre !== "" && !selectedGenres.includes(selectedGenre) && selectedGenres.length < 3) {
            setSelectedGenres((prevGenres) => [...prevGenres, selectedGenre]);
        }
        console.log(selectedGenres)
    };

    const [selectedPlatforms, setSelectedPlatforms] = useState([]);

    const removePlatform = (platformToRemove) => {
        setSelectedPlatforms((prevPlatforms) => prevPlatforms.filter((platform)=> platform !== platformToRemove))
    }

    const addPlatformToList = () => {  
        const selectedPlatform = document.querySelector('select[name="platforms"]').value;
        if (selectedPlatform !== "" && !selectedPlatforms.includes(selectedPlatform) && selectedPlatforms.length < 5) {
            setSelectedPlatforms((prevPlatforms) => [...prevPlatforms, selectedPlatform]);
        }
        console.log(selectedPlatforms)
    };


    const submitForm = async (e) =>{
        e.preventDefault();
        if(!formComplete){
            alert("Completa todos los campos")
        }
        if (formComplete === true){
            dispatch(postGame(form))
            alert("JUEGO CREADO VIEJO")
            setCreated("Juego creado con éxito")
        }
        clearForm();
    }



  return (
    <div>
        <div className={styles.mainContainer}> 
             <form onSubmit={submitForm} className={styles.form}> 
                <div className={styles.inputContainer}>
                    <h1 className={styles.textMain}>Create a <span className={styles.videogame}>videogame</span></h1>
                
                
                <div className={styles.inputUnit}>
                    <label className={styles.mainText}>Name:</label>
                    <input
                    placeholder='Videogame name...'
                    onChange={handleInputs}
                    className={styles.input}
                    type='text'
                    value={form.name}
                    name='name'
                    />
                    <span className={styles.spans}>{errors?.name}</span>
                </div>
                  
                 <div className={styles.inputUnit}>
                    <label className={styles.mainText}>Image:</label>
                    <input
                    onChange={handleInputs}
                    className={styles.input}
                    type='file'
                    value={form.image}
                    name='image'
                    />
                    <span className={styles.spans}>{errors?.image}</span>
                </div>

                <div className={styles.inputUnit}>
                    <label className={styles.mainText}>Description:</label>
                    <input
                    onChange={handleInputs}
                    className={styles.input}
                    type='text'
                    value={form.text}
                    name='description'
                    />
                    <span className={styles.spans}>{errors?.description}</span>
                </div>

                <div className={styles.inputUnit}>
                    <label className={styles.mainText}>Platforms:</label>
                    <select className={styles.input} name="platforms" onChange={addPlatformToList}>
                    <option value="" name="" hidden>
                        Select one to three genres
                    </option>
                    {platforms.map((platform, index) => (
                        <option key={index} value={platform}>
                            {platform}
                        </option>
                    ))}
                </select>
                <ul>
                        {selectedPlatforms.map(platform => (
                            <li key={platform}>
                            {platform}
                            <button onClick={() => removePlatform(platform)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <span className={styles.spans}>{errors?.platforms}</span>
                </div>
                <div className={styles.inputUnit}>
                    <label onChange={handleInputs} className={styles.mainText}>Release date:</label>
                    <input
                    className={styles.input}
                    type='date'
                    value={form.date}
                    name='date'
                    />
                </div>

                <div className={styles.inputUnit}>
                    <label className={styles.mainText}>Rating:</label>
                    
                    <input
                    onChange={handleInputs}
                    className={styles.input}
                    type='number'
                    value={form.rating}
                    name='rating'
                    />
                    <span className={styles.spans}>{errors?.rating}</span>
                </div>
                
                
                <div className={styles.inputUnit}>
                    <label className={styles.mainText}>Genres:</label>
                    <select className={styles.input} name="genres" onChange={addGenreToList}>
                    <option value="" name="" hidden>
                        Select one to three genres
                    </option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
                <ul>
                        {selectedGenres.map(genre => (
                            <li key={genre}>
                            {genre}
                            <button onClick={() => removeGenre(genre)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>

                </div>
                <div>
                <button
                className={styles.submit}
                type='submit'
                > 
                Create videogame  
                </button>
               </div>
              
                
                <div className={styles.botones}>
              <NavLink to="/home">
                <button
                className={styles.btn}
                >🏠</button>
                </NavLink>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form