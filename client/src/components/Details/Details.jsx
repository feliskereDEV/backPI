import React, { useEffect, useState } from 'react';
import styles from './details.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from "../NotFound/notfound"

const Details = () => {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/videogames/${id}`)
      .then((res) => {
        setGame(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

    if (game.name === undefined){
        return <div><NotFound></NotFound></div>
    }
    return (
    <div className={styles.background}>
      <div className={styles.details}>
        <div className={styles.container}>
            <div className={styles.name}>{game.name}</div>
            <div className={styles.genres}>Genres: {game.genres}</div>
            <div className={styles.rating}>Rating: <span className={styles.stars}>{game.rating}</span></div>
            <div className={styles.platforms}>Platforms: {game.platforms}</div>
            <div className={styles.released}>Release Date: {game.released}</div>
            <div className={styles.description}>Description: {game.description}</div>
            <div className={styles.image}><img src={game.image} alt="Game"/></div>
        </div>
      </div>
    </div>
  );
};

export default Details;