import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';



function App () {
    
  return (
    <Router>
      <div><Navbar /></div>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contactus' element= {<Contact />} />
      </Routes>
      <div><Footer /></div>
    </Router>
  );
}

export default App;
