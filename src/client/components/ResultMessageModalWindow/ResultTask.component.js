import React from 'react';
import './ResultMessageModalWindow.styles.css';
import PropTypes from 'prop-types';

export default function ResultTask({ correctAnswer }) {
  if (correctAnswer > 3) {
    return (
      <div className="success_task">
        <h3>Congratulations!</h3>
      </div>
    );
  }
  return (
    <div className="failed_task">
      <h3>Incorrect Answered!</h3>
    </div>
  );
}

ResultTask.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
};
