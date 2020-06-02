import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Timer.styles.css';

const Timer = ({ countdown }) => {
  const [counter, setCounter] = useState(countdown);

  useEffect(() => {
    const timer = counter && setTimeout(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="timer-content">
      <span>{moment.unix(counter).format('mm:ss')}</span>
    </div>
  );
};

Timer.propTypes = {
  countdown: PropTypes.number.isRequired,
};

export default Timer;
