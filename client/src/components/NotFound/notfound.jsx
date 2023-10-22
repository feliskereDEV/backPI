
import React from 'react'
import styles from "../NotFound/notfound.module.css"
import teemo from "../../assets/teemo.png"
import {NavLink} from "react-router-dom"
const notfound = () => {
  return (
    <div className={styles.mainContainer}>
        <h1 className={styles.mainText}>Are u lost?</h1>
        <img src={teemo} alt='teemo' className={styles.imagen}></img>
        <NavLink to="/">
            <button>Go back</button>
        </NavLink>
    </div>
  )
}
export default notfound