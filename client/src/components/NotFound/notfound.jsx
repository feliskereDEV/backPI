import React from 'react'
import styles from "../NotFound/notfound.module.css"
import teemo from "../../assets/teemo.png"
import {NavLink} from "react-router-dom"
const notfound = () => {
  return (
    <div className={styles.mainContainer}>

       <div className={styles.mainText}>
        <h1 className={styles.text}>Are u lost?</h1>
       </div>

        <div className={styles.teemo}>
          <img className={styles.img} src={teemo} alt='teemo'/>
        </div>

        <div className={styles.button}>
          <NavLink to="/">
            <button className={styles.btn}>🏠</button>
          </NavLink>
        </div>
    </div>
  )
}
export default notfound