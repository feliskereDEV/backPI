import React from 'react'
import styles from "./Card.module.css"
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
const Card = ({id,name,platforms,rating,genres,image}) => {
 
    return (
    <div className={styles.cardContainer}>
        <NavLink className={styles.navLink} to={`/videogames/${id}`}>
            <div className={styles.card}>
                <h1 className={styles.name}>{name}</h1>
                <h1 className={styles.genres}>{genres}</h1>
                <h4 className={styles.rating}>{rating}</h4>
                <img src={image} alt={image}></img>
                
                <h3 className={styles.platforms}>{platforms}</h3>
            </div>
        </NavLink>
    </div>
  )
}   

export default Card