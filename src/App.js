import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav'
import Showcase from './sections/showcase'
import Services from './sections/services'
import About from './sections/about'
import Faq from './sections/faq';
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
