import React from 'react';
import 'normalize.css/normalize.css';
import './styles/main.scss';
import smoothscroll from 'smoothscroll-polyfill';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Collection from './Collection/Collection';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

//initiate polyfill for smooth scroll (cross-browser smooth scroll behaviour fix)
smoothscroll.polyfill();

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Collection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
