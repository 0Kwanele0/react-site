import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav'
import Showcase from './sections/showcase'
import Services from './sections/services'
import About from './sections/about'
import Faq from './sections/faq';
import Footer from './components/footer';
import Testimonials from './sections/testimonials';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return( 
    <Router>
      <Showcase />
      <Services />
      <About />
      <Testimonials />
      <Faq />
      <Footer />
    </Router>
  )
}

export default App;
