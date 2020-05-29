import React from 'react';
import PropTypes from 'prop-types';

export default function AmountOfTime({ timeSpent }) {
  // i calculate the timeSpent on the task as a number of seconds,
  // and modify it to hours minutes and seconds
  const hours = Math.floor(timeSpent / 3600);
  const minutes = Math.floor((timeSpent % 3600) / 60);
  const seconds = Math.floor((timeSpent % 3600) % 60);

  // i'm not sure if the *(if statement) should be like this,
  // but i write it in case there's bug in the prop
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
