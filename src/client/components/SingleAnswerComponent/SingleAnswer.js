import React from 'react';
import PropTypes from 'prop-types';
import './SingleAnswer.styles.css';

export default function SingleAnswer({ title }) {
  return (
    <div className="single-answer-component">
      <h2>{title}</h2>
      <label className="answer-container">
        NE
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <label className="answer-container">
        SE
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
  );
}

SingleAnswer.propTypes = {
  title: PropTypes.string.isRequired,
};
