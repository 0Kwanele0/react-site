import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav'
import Showcase from './showcase'
import Services from './services'
import About from './about'
import Faq from './faq';
import Footer from './components/footer';

function App() {
  return( 
    <Router>
      <Nav />
      <Showcase />
      <Services />
      <About />
      <Faq />
      <Footer />
    </Router>
  )
}

export default App;
