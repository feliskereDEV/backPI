import React from 'react'
import Cards from "../Cards/Cards"
import styles from "../Home/home.module.css"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllGenres, getAllVideogames } from '../../redux/actions/actions'
const Home = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllGenres())
    dispatch(getAllVideogames())
  }, [dispatch])

  return (
    <div className={styles.cardContainer}>
      <Cards/>
    </div>
  )
}

export default Home;