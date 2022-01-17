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
        <div className={styles.listContainer}>
          <ul>
            <li>Projects</li>
            <hr />
            <li>About</li>
            <hr />
            <li>Contact</li>
            <hr />
            <li>Resume</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Hero;
