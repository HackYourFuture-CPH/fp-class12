import React from 'react';
import './ResultMessageModalWindow.styles.css';
import PropTypes from 'prop-types';

export default function FinalTaskMessage({ correctAnswer, checkpoints }) {
  if (correctAnswer > 3) {
    return (
      <div className="final_message-component">
        <p>
          You have now answered correct on {correctAnswer} out of 5 questions
          right.
          <br />
          You&#39;re a smart pirate.
        </p>
        <p>You have now {checkpoints} checkpoints left to find the treasure</p>
      </div>
    );
  }
  return <p>But you still have a chance.</p>;
}

FinalTaskMessage.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
  checkpoints: PropTypes.number.isRequired,
};
