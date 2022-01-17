// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Stylesheet
import styles from './NavBar.module.css';

function NavBar(props) {
  return (
    <div className={styles.navBar}>
      <h1>
        <Link to='/'>
          Landon Spell<span>.</span>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/projects_d'>Projects</Link>
        </li>
        <li>
          <Link to='/about_d'>About</Link>
        </li>
        <li>
          <Link to='/contact_d'>Contact</Link>
        </li>
        <li>
          <a
            href='https://docs.google.com/document/d/1uMVq5JiOIEi_6B2-u-7LSNKSk9APIHIr3sUP7jtlLnA/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
