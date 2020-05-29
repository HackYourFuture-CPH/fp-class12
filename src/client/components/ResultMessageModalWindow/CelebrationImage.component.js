import React from 'react';
import Image1 from '../../assets/images/confetti-ball.png';
import Image2 from '../../assets/images/dizzy-face.png';
import './ResultMessageModalWindow.styles.css';
import PropTypes from 'prop-types';

export default function CelebrationImage({ correctAnswer }) {
  if (correctAnswer > 3) {
    return (
      <div className="celebration_image-component">
        <img src={Image1} alt="avatar3-ce" />
      </div>
    );
  }
  return (
    <div className="celebration_image-component">
      <img src={Image2} alt="avatar3-ce" />
    </div>
  );
}

CelebrationImage.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
};
