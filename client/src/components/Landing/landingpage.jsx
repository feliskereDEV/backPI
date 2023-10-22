import styles from "../Landing/landingpage.module.css"

import logo from "../../assets/logo.png"
import hero from "../../assets/hero.png"

import {React} from 'react'
import {NavLink} from "react-router-dom"
const landing = () => {
  return (
    <div>
        {/* <div className={styles.intro} >
          <h1 className={styles.text_header}>
            <span className={styles.logoSpan}>Henry</span><span className={styles.logoSpan} >videogames</span>
          </h1>
       </div>  */}
       <div className={styles.mainContainer}>
            <img className={styles.logo} src={logo} alt="logo"></img>
            <img className={styles.hero} src={hero} alt="hero"></img>
            <h1 className={styles.subtitle}><span className={styles.bold}>Videogames</span> hub</h1>
            <NavLink to="/home">
            <button className={styles.button}>Start now</button>
            </NavLink>
            <h3 className={styles.text}>Only for <span className={styles.span}> good gamers</span></h3>
        </div> 
    </div>
  )
}

export default landing
