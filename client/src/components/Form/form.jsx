
import React, { useEffect } from 'react'
import styles from "./form.module.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllGenres, getPlatforms, postVideogame } from '../../redux/actions/actions'
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
},[dispatch, genres.length, platforms.length])



 
    //seteo mi form sin datos
    const [form, setForm] = useState({
        name: "",
        image: "",
        description:"",
        platforms:[],
        released:"",
        rating:"",
        genres:[]
    })

    useEffect(()=>{
        const checkFormComplete = () => {
            if(
                !form.name          ||
                !form.image         ||
                !form.description   ||
                !form.platforms     ||
                !form.released      ||
                !form.rating        ||
                !form.genres
               
                )
                
                {
                    console.log(form)
                setFormComplete(false)
            } else{
                setFormComplete(true)
                console.log(form)
            }
        }
        checkFormComplete()
    }, [form])

    

    const [formComplete, setFormComplete] = useState(false);

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        description:"",
        platforms:"",
        released:"",
        rating:"",
        genres:"",
    })

    const clearForm = () => {
        setForm({
            name: "",
            image: "",
            description:"",
            platforms:[],
            released:"",
            rating:"",
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
      
    
    const addGenreToList = (e) => {  
        const selectedGenre = document.querySelector('select[name="genres"]').value;
        if (selectedGenre !== "" && !selectedGenres.includes(selectedGenre) && selectedGenres.length < 3) {
            setSelectedGenres((prevGenres) => [...prevGenres, selectedGenre]);
            const aux = [...selectedGenres]
            aux.push(selectedGenre)
            setForm({
                ...form,
                [e.target.name]: aux
            })
        }
    };

    const [selectedPlatforms, setSelectedPlatforms] = useState([]);

    const removePlatform = (platformToRemove) => {
        setSelectedPlatforms((prevPlatforms) => prevPlatforms.filter((platform)=> platform !== platformToRemove))
    }

    const addPlatformToList = (e) => {  
        const selectedPlatform = document.querySelector('select[name="platforms"]').value;
        if (selectedPlatform !== "" && !selectedPlatforms.includes(selectedPlatform) && selectedPlatforms.length < 5) {
            setSelectedPlatforms((prevPlatforms) => [...prevPlatforms, selectedPlatform]);
            const aux = [...selectedPlatforms]
            aux.push(selectedPlatform)
            setForm({
                ...form,
                [e.target.name]: aux
            })
        }
    };




    const [API_KEY] = useState('bad96ab43d33341a298b5d1010d7a013')

    const submitForm = async (e) => {
        e.preventDefault();
        const imageInput = e.target.querySelector('input[type="file"]');
        let data = ""
        if (imageInput.files.length > 0) {
            const formData = new FormData();
            formData.append('image', imageInput.files[0]);
            try {
                const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
                    method: 'POST',
                    body: formData
                });  
            data = await response.json();

            } catch (error) {
                console.error('Error:', error);
                if(imageInput.files.length === 0){
                    alert('Error al subir la imagen');
                } else if (!formComplete){
                    alert("Completa todos los campos")
                }
            }
        }
        if(formComplete){
            form.image = data.data.url
            console.log(form)
            dispatch(postVideogame(form))
            alert("Juego creado con éxito");
        clearForm();
        }
    };

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
                    value={form.description}
                    name='description'
                    />
                    <span className={styles.spans}>{errors?.description}</span>
                </div>

               
                <div className={styles.inputUnit}>
                    <label onChange={handleInputs} className={styles.mainText}>Release date:</label>
                    <input
                    
                    className={styles.input}
                    type='date'
                    value={form.released}
                    onChange={handleInputs}
                    name='released'
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
                <ul className={styles.list}>
                        {selectedPlatforms.map(platform => (
                            <li className={styles.li} key={platform}>
                            {platform}
                            <button className={styles.buttonRemove} onClick={() => removePlatform(platform)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <span className={styles.spans}>{errors?.platforms}</span>
                </div>
                
                <div className={styles.inputUnit}>
                    <label className={styles.mainText}>Genres:</label>
                <select className={styles.input} name="genres" onChange={addGenreToList}>
                    <option value="" name="" hidden>Select one to three genres</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
                    
                    <ul className={styles.list}>
                        {selectedGenres.map(genre => (
                            <li className={styles.li} key={genre}>
                            {genre}
                            <button className={styles.buttonRemove} onClick={() => removeGenre(genre)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className={styles.botones}>
                <button
                className={styles.submit}
                type='submit'
                > 
                Create videogame  
                </button>
              
                
               
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