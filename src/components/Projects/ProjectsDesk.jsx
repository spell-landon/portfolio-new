// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Stylesheet
import styles from './ProjectsDesk.module.css';

function ProjectsDesk(props) {
  return (
    <div className={styles.projectsContainer}>
      <h1>
        Projects<span>.</span>
      </h1>
      <div className={styles.gallery}>
        {/* Recipeace */}
        <Link to='/recipeace'>
          <div className={styles.recipeace}>
            <h2>Recipeace</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              quidem odit fugit sequi. Recusandae modi molestiae reprehenderit
              dignissimos, tempore placeat.
            </p>
          </div>
        </Link>
        {/* Job Search Tracker */}
        <div className={styles.jobsearchtracker}>
          <h2>Job Search Tracker</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            quidem odit fugit sequi. Recusandae modi molestiae reprehenderit
            dignissimos, tempore placeat. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sint a delectus reprehenderit debitis
            accusantium. Harum soluta deleniti reiciendis praesentium porro!
          </p>
        </div>
        {/* Flash Cards */}
        <div className={styles.flashcards}>
          <h2>Flash Cards</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            quidem odit fugit sequi. Recusandae modi molestiae reprehenderit
            dignissimos, tempore placeat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDesk;
