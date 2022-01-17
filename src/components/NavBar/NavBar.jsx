import React from 'react';
import styles from './NavBar.module.css';

function NavBar(props) {
  return (
    <div className={styles.navBar}>
      <ul>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}

export default NavBar;
