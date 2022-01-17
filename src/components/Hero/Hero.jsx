// Dependencies
import React from 'react';
// Stylesheets
import styles from './Hero.module.css';
// import bg from '../../assets/main-bg.jpg';

function Hero(props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}></div>
      <section className={styles.textArea}>
        <h1>
          Landon Spell<span>.</span>
        </h1>
      </section>
    </div>
  );
}

export default Hero;
