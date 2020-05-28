import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Timer.styles.css';

const formatTime = (timeLeftInSecond) => {
  let minute = Math.floor(timeLeftInSecond / 60);
  if (minute < 10) minute = `0${minute}`;

  let second = timeLeftInSecond - 60 * minute;
  if (second < 10) second = `0${second}`;

  return `${minute}:${second}`;
};
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
