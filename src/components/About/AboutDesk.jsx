import React from 'react';
import styles from './AboutDesk.module.css';
import landon from '../../assets/landon.jpeg';
function AboutDesk(props) {
  return (
    <div className={styles.aboutContainer}>
      <h1>
        About<span>.</span>
      </h1>
      <div className={styles.textArea}>
        <img src={landon} alt='Landon Spell' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus neque,
          massa sed proin tempus vestibulum senectus est iaculis. Sit malesuada
          molestie tincidunt aliquam a feugiat. Aliquet viverra sagittis, sit
          tincidunt aliquet hendrerit. Enim non cras tellus montes. Vitae enim,
          at quisque aenean placerat. Nascetur rhoncus fames donec arcu.
          Phasellus vestibulum laoreet ornare arcu purus tellus. Scelerisque
          elementum enim pharetra scelerisque amet, nulla. Duis quisque mauris
          risus scelerisque nunc sed egestas. Mi ac a nunc dui. Sed sed magna
          adipiscing faucibus amet nunc tincidunt a, vestibulum. Vitae rhoncus
          blandit orci proin non. Mi urna cras sit scelerisque in. Id eu cursus
          mi mi libero pellentesque adipiscing risus risus. Eu pulvinar dolor
          adipiscing bibendum. Mauris eget non eget nulla proin sed. Tellus
          vitae sit ullamcorper eu pellentesque. Massa enim lorem ut nulla nibh
          gravida. Cras nam sit ultrices ornare aliquet turpis. Pharetra, elit
          aliquam auctor maecenas purus. Libero leo sollicitudin id quam euismod
          ipsum lacus massa. Rhoncus, vulputate feugiat ut ultricies sodales.
          Duis enim a, enim, diam amet, sit tempus. Sed est sit tellus facilisis
          neque, faucibus a.
        </p>
      </div>
    </div>
  );
}

export default AboutDesk;
