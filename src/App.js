import React, { Component } from 'react';
import './assets/sass/App.scss';

import Hero from './components/Hero';
import Info from './components/Info';
import Tabs from './components/Tabs';
import Price from './components/Price';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Guaranty from './components/Guaranty';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <div className="App">
      <Hero />
      <Info />
      <Tabs />
      <Price />
      <Presentation />
      <Contact />
      <Guaranty />
      <Footer />
    </div>
  }
}

export default App;
