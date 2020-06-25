import React from 'react';
import './AchieveComponent.styles.css';
import PropTypes from 'prop-types';

const Scores = ({ achieveTask, image, altImage }) => {
  return (
    <div className="scores">
      <div className="AchieveCircle">
        <img src={image} alt={altImage} width="25px" />
      </div>
      <div className="wireframes">
        <p>{achieveTask}</p>
      </div>
    </div>
  );
};

Scores.propTypes = {
  achieveTask: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
};
export default Scores;
