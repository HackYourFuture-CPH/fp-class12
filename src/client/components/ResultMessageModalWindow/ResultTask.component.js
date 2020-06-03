import React from 'react';
import './ResultMessageModalWindow.styles.css';
import PropTypes from 'prop-types';

export default function ResultTask({ correctAnswer }) {
  if (correctAnswer > 3) {
    return (
      <div className="success_task">
        <h1>Congratulations!</h1>
      </div>
    );
  }
  return (
    <div className="failed_task">
      <h1>Incorrect Answered!</h1>
    </div>
  );
}

ResultTask.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
};
