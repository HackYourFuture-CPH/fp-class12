import React from 'react';
import emojiConfettiBall from '../../assets/images/SVG/emoji-confetti-ball.svg';
import dizzyFace from '../../assets/images/SVG/emoji-dizzy-face.svg';
import './ResultMessageModalWindow.styles.css';
import PropTypes from 'prop-types';

export default function CelebrationImage({ correctAnswer }) {
  if (correctAnswer > 3) {
    return (
      <div className="celebration_image-component">
        <img src={emojiConfettiBall} alt="emoji-confetti-ball.svg" />
      </div>
    );
  }
  return (
    <div className="celebration_image-component">
      <img src={dizzyFace} alt="dizzy-face.png" />
    </div>
  );
}

CelebrationImage.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
};
