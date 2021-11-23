import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/pages/About';
import Categories from './components/pages/Categories';
import Contact from './components/pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function Routers() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} exact element={<Home />} />
        <Route path={'/about'} exact element={<About />} />
        <Route path={'/categories'} exact element={<Categories />} />
        <Route path={'/contact'} exact element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routers;
