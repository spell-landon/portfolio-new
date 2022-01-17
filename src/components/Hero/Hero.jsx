// Dependencies
import React from 'react';
import { Link, Element } from 'react-scroll';
// Stylesheets
import styles from './Hero.module.css';
// Components
import ProjectsMob from '../Projects/ProjectsMob';
import AboutMob from '../About/AboutMob';
import ContactMob from '../Contact/ContactMob';

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
            <li>
              {/* Use link for smooth scrolling on mobile */}
              <Link
                activeClass='active'
                className='projects'
                to='projects'
                spy={true}
                smooth={true}
                duration={600}>
                Projects
              </Link>
            </li>
            <hr />
            <li>
              <Link
                activeClass='active'
                className='about'
                to='about'
                spy={true}
                smooth={true}
                duration={600}>
                About
              </Link>
            </li>
            <hr />
            <li>
              <Link
                activeClass='active'
                className='contact'
                to='contact'
                spy={true}
                smooth={true}
                duration={600}>
                Contact
              </Link>
            </li>
            <hr />
            <li>Resume</li>
          </ul>
        </div>
      </section>
      {/* element gives the 'link' a position to go to */}
      <Element name='projects'>
        <ProjectsMob />
      </Element>
      <Element name='about'>
        <AboutMob />
      </Element>
      <Element name='contact'>
        <ContactMob />
      </Element>
    </div>
  );
}

export default Hero;
