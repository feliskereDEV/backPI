import React from 'react'
import styles from "./form.module.css"
import { useState } from 'react'
import {useSelector} from "react-redux"
import { validate } from './validate'
const Form = () => {


    // const allVideogames = useSelector((state) => state.videogames).sort((a,b) =>{
        
    //     // ordeno alfabeticamente mis juegos

    //     if (a.name < b.name){
    //         return -1;
    //     }
    //     if (a.name > b.name){
    //         return 1;
    //     }
    //     return 0;
    // });
    
    //seteo mi form sin datos
    const [form, setForm] = useState({
        name: "",
        image: "",
        description:"",
        platforms:"",
        releaseDate:"dd/mm/aaaa",
        rating:"0",
        videogames:[]
    })

    const [errors, setErrors] = useState({})

    const handleInputs = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setErrors(validate({...form, [e.target.name]: e.target.value}))
    }

  return (
    <div>
        <div className={styles.mainContainer}> 
             <form className={styles.form}> {/*onClick submitForm, onChange en el input */}
                <div className={styles.inputContainer}>
                    <h1 className={styles.mainText}>Create a<span className={styles.spanText}>videogame!!!</span></h1>
                
                
                <div className={styles.inputUnit}>
                    <label className={styles.mainText}>name:</label>
                    <input
                    onChange={handleInputs}
                    className={styles.input}
                    type='text'
                    value={form.name}
                    name='name'
                    />
                    <span className={styles.spans}>{errors.name}</span>
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
                    <span className={styles.spans}>{errors.image}</span>
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
                    <span className={styles.spans}>{errors.description}</span>
                </div>

                <div className={styles.inputUnit}>
                    <label className={styles.mainText}>Platforms:</label>
                    <select name='select' className={styles.input} onChange={handleInputs}>
                        <option >Steam</option>
                        <option >Battle.net</option>
                        <option >Epic Games</option>
                    </select>
                    <span className={styles.spans}>{errors.platforms}</span>
                </div>
                <div className={styles.inputUnit}>
                    <label onChange={handleInputs} className={styles.mainText}>Release date:</label>
                    <input
                    className={styles.input}
                    type='date'
                    value={form.text}
                    name='date'
                    />
                </div>

                <div className={styles.inputUnit}>
                    <label className={styles.mainText}>Rating:</label>
                    <label>1-10</label>
                    <input
                    onChange={handleInputs}
                    className={styles.rating}
                    type='number'
                    value={form.rating}
                    name='rating'
                    />
                    <span className={styles.spans}>{errors.rating}</span>
                </div>
                <button
                className={styles.button}
                type='submit'
                > 
                Submit videogame  
                </button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Form