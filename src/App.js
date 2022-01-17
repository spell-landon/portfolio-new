import React from 'react';
// components
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <header>
        <Hero />
      </header>
    </>
  );
}

export default App;
