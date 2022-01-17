import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import ProjectsMob from './components/Projects/ProjectsMob';
import ProjectsDesk from './components/Projects/ProjectsDesk';
import AboutMob from './components/About/AboutMob';
import AboutDesk from './components/About/AboutDesk';
import ContactMob from './components/Contact/ContactMob';

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        {/* Routes */}
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/projects' element={<ProjectsMob />} />
          <Route path='/projects_d' element={<ProjectsDesk />} />
          <Route path='/about' element={<AboutMob />} />
          <Route path='/about_d' element={<AboutDesk />} />
          <Route path='/contact' element={<ContactMob />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
