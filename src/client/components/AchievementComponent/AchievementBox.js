import React from 'react';
import PropTypes from 'prop-types';
import './AchieveComponent.styles.css';
import Scores from './Scores';

const AchievementBox = ({ achieveTask, image }) => {
  return (
    <div className="AchieveBox">
      <Scores achieveTask={achieveTask} image={image} />
    </div>
  );
};

AchievementBox.propTypes = {
  achieveTask: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AchievementBox;
