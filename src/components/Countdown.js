import React, { Component } from 'react';
import moment from 'moment';

class Countdown extends Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item">
              <SVGCircle radius={daysRadius} />
              {days}
              <span>días</span>
            </div>
          )}
          {hours && (
            <div className="countdown-item">
              <SVGCircle radius={hoursRadius} />
              {hours}
              <span>horas</span>
            </div>
          )}
          {minutes && (
            <div className="countdown-item">
              <SVGCircle radius={minutesRadius} />
              {minutes}
              <span>minutos</span>
            </div>
          )}
          {seconds && (
            <div className="countdown-item">
              <SVGCircle radius={secondsRadius} />
              {seconds}
              <span>segundos</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

if (window.innerWidth < 992) {
  console.log('Hola');
} else {
  console.log('No hola');
}

let screenWidth = window.innerWidth
const SVGCircle = function ({ radius }) {

  console.log(screenWidth)
  if (screenWidth <= 1024) {
    return <svg className="countdown-svg">
      <path
        fill="none"
        stroke="#2c94f57c"
        strokeWidth="4"
        d={describeArc(50, 50, 48, 0, radius)}
      />
      <path
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        d={describeArc(48, 48, 46, 0, radius)}
      />
    </svg>
  }
  else {
    return <svg className="countdown-svg">
      <path
        fill="none"
        stroke="#2c94f57c"
        strokeWidth="18"
        d={describeArc(120, 120, 100, 0, radius)}
      />
      <path
        fill="none"
        stroke="#ffffff"
        strokeWidth="16"
        d={describeArc(118, 118, 98, 0, radius)}
      />
    </svg>
  }
};

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  let angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  let start = polarToCartesian(x, y, radius, endAngle);
  let end = polarToCartesian(x, y, radius, startAngle);

  let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  let d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(' ');

  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default Countdown