import React from 'react';
import styles from './AboutMob.module.css';
import landon from '../../assets/landon.jpeg'

function AboutMob(props) {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <h1>About</h1>
        <img src={landon} alt="Landon Spell" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio leo mi
          non blandit viverra sollicitudin est molestie tellus. Dui est sit vel
          felis, cursus consectetur mi viverra nibh. Magna at aliquam sagittis
          phasellus. Amet at semper tellus odio tincidunt auctor. Habitasse
          sollicitudin quis netus eu. Interdum ac ut et eros elementum viverra
          rutrum eget. Donec augue rhoncus varius sit eget eu, viverra id. Ut
          accumsan proin risus libero nisl elementum. Lectus tincidunt viverra
          aenean risus lectus. Pellentesque magna felis, nibh dolor purus quis
          dui pharetra nibh. Nisi sed egestas nullam justo, etiam at. Pharetra
          libero et, ut neque elementum neque augue quam at. Nulla enim
          consectetur feugiat nec eu. Massa in luctus velit semper ac, sed.
        </p>
      </div>
    </div>
  );
}

export default AboutMob;
