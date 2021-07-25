import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/nav'
import Showcase from './showcase'
import Services from './services'
import About from './about'
import Faq from './faq';




function App() {
  return( 
    <Router>
      <Nav />
      <Showcase />
      <Services />
      <About />
      <Faq />
    </Router>
  )
}

export default App;
