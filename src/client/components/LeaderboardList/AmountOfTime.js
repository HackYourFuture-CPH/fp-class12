import React from 'react';
import PropTypes from 'prop-types';

export default function AmountOfTime({ timeSpent }) {
  const hours = Math.floor(timeSpent / 3600);
  const minutes = Math.floor((timeSpent % 3600) / 60);
  const seconds = Math.floor((timeSpent % 3600) % 60);

  if (!timeSpent) {
    return (
      <div className="timer-div">
        <div>timer is missing</div>
      </div>
    );
  }

  return (
    <div className="timer-div">
      <p className="timer">
        {hours} hour {minutes} min {seconds} sec.
      </p>
    </div>
  );
}

AmountOfTime.propTypes = {
  timeSpent: PropTypes.number.isRequired,
};
