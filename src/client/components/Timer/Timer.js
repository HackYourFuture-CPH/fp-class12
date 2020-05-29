import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Timer.styles.css';

// prepends `0` to single digit number
const getTimeWithDoubleDigits = (numberString) =>
  `${numberString}`.padStart(2, '0');

function formatTime(timeLeftInSecond) {
  const secondsPrMinute = 160;
  // Deriving minutes from total seconds and rounding it
  const minutes = Math.floor(timeLeftInSecond / secondsPrMinute);
  const formattedMinutes = getTimeWithDoubleDigits(minutes);

  //  Deriving remaining seconds from total seconds
  const seconds = timeLeftInSecond - secondsPrMinute * minutes;
  const formattedSeconds = getTimeWithDoubleDigits(seconds);

  return `${formattedMinutes}:${formattedSeconds}`;
}

const Timer = ({ countdown }) => {
  const [counter, setCounter] = useState(countdown);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className="timer-content">
      <span>{formatTime(counter)}</span>
    </div>
  );
};
Timer.propTypes = {
  countdown: PropTypes.number.isRequired,
};

export default Timer;
