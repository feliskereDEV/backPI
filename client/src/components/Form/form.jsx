import axios from "axios"
import React, { useEffect } from 'react'
import styles from "./form.module.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllGenres, getPlatforms } from '../../redux/actions/actions'
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
        platforms:"",
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

    const handleInputsGenre = (event) => {
  const value = event.target.value;
  if (!form.genres.includes(value)) {
    setForm({
      ...form,
      genres: [...form.genres, value]
    });
    setErrors(validate({ ...form, genres: [...form.genres, value] }));
  }
};


    const submitForm = async (e) =>{
        e.preventDefault();
        if(!formComplete){
            alert("Completa todos los campos")
        }
        if (formComplete === true){
            await axios.post("/genre", form)
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
                    <select className={styles.input} name="platforms" onChange={handleInputsGenre}>
                    <option value="" name="" hidden>
                            Select one to three genres
                        </option>
                        {platforms.map((platform, index) => (
                            <option key={index} value={platforms}>
                                {platform}
                            </option>
                        ))}
                    </select>
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
                    <select className={styles.input} name="genres" onChange={handleInputsGenre}>
                    <option value="" name="" hidden>
                            Select one to three genres
                        </option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>

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