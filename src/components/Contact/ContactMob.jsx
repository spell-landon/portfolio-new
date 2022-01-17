import React from 'react';
import styles from './ContactMob.module.css';

function ContactMob(props) {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.textContainer}>
        <h1>Contact</h1>
        <p>I'm the form</p>
      </div>
    </div>
  );
}

export default ContactMob;
