import React from 'react';
import './ResultMessageModalWindow.styles.css';
import PropTypes from 'prop-types';

export default function ResultTask({ correctAnswer }) {
  if (correctAnswer > 3) {
    return <h3 className="success_task">Congratulations!</h3>;
  }
  return <h3 className="failed_task">Incorrect Answered!</h3>;
}

ResultTask.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
};
