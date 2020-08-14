import React from 'react';
import '../assets/sass/Hero.scss';

import Countdown from './Countdown.js';
function Hero() {
  return <div className="hero">
    <div className="content">
      <h1>Como superar crisis en la vida</h1>
      <Countdown timeTillDate="9 27 2020, 8:00 pm" timeFormat="MM DD YYYY, h:mm a" />
    </div>
  </div>
}

export default Hero;
