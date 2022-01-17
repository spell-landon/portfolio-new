// Dependencies
import React from 'react';
// Stylesheet
import styles from './ProjectsMob.module.css';

function ProjectsMob(props) {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <ul>
        <li>
          <div className={styles.recipeace}>
            <h2>Recipeace</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              quidem odit fugit sequi. Recusandae modi molestiae reprehenderit
              dignissimos, tempore placeat.
            </p>
          </div>
        </li>
        <li>
          <div className={styles.jobsearchtracker}>
            <h2>Job Search Tracker</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              quidem odit fugit sequi. Recusandae modi molestiae reprehenderit
              dignissimos, tempore placeat. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Sint a delectus reprehenderit
              debitis accusantium. Harum soluta deleniti reiciendis praesentium
              porro!
            </p>
          </div>
        </li>
        <li>
          <div className={styles.flashcards}>
            <h2>Flash Cards</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              quidem odit fugit sequi. Recusandae modi molestiae reprehenderit
              dignissimos, tempore placeat.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProjectsMob;
