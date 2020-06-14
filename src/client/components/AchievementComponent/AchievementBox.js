import React from 'react';
import PropTypes from 'prop-types';
import './AchieveComponent.styles.css';

const AchievementBox = ({ achieveTask, image, altImage }) => {
  return (
    <div className="AchieveBox">
      <div className="AchieveCircle">
        <img src={image} alt={altImage} />
      </div>
      <div>
        <p className="wireframes">{achieveTask}</p>
      </div>
    </div>
  );
};

AchievementBox.propTypes = {
  achieveTask: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
};

export default AchievementBox;
