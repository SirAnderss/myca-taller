import React, { Component } from 'react';
import './assets/sass/App.scss';

import Hero from './components/Hero';
import Info from './components/Info';
import Tabs from './components/Tabs';
import Price from './components/Price';
import Guaranty from './components/Guaranty';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return <div className="App">
      <Hero />
      <Info />
      <Tabs />
      <Price />
      <Guaranty />
      <Contact />
    </div>
  }
}

export default App;
