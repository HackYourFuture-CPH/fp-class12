import React from 'react';
import PropTypes from 'prop-types';
import './SingleAnswer.styles.css';

export default function SingleAnswer({ question, option1, option2, checkbox }) {
  return (
    <div className="single-answer-component">
      <h2>{question}</h2>
      <label className="answer-container">
        {option1}
        <input type={checkbox} name="answer" />
        <span className="checkmark" />
      </label>
      <label className="answer-container">
        {option2}
        <input type={checkbox} name="answer" />
        <span className="checkmark" />
      </label>
    </div>
  );
}

SingleAnswer.propTypes = {
  question: PropTypes.string.isRequired,
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired,
  checkbox: PropTypes.string.isRequired,
};
