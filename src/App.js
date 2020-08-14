import React, { Component } from 'react';
import './assets/sass/App.scss';

import Hero from './components/Hero';
import Info from './components/Info';
import Tabs from './components/Tabs';
import Test from './components/Test';

class App extends Component {
  render() {
    return <div className="App">
      <Hero />
      <Info />
      <Tabs />
      <Test />
    </div>
  }
}

export default App;
