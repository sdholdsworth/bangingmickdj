import React from 'react';
import 'normalize.css/normalize.css';
import './styles/main.scss';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Collection from './Collection/Collection';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

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
