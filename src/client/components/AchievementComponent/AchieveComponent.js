import React from 'react';
import PropTypes from 'prop-types';
import './AchieveComponent.styles.css';
import keyImage from '../../assets/images/key.png';
import xImage from '../../assets/images/close-outline1.png';
import timerImage from '../../assets/images/carbon-timer.png';
import cupImage from '../../assets/images/cup-icon.png';

export default function AchieveComponent({ achieveTask, Ranking, timeSpent }) {
  const minutes = Math.floor(timeSpent / 60);

  return (
    <div className="mainDiv">
      <div className="AchieveBox1">
        {' '}
        <img src={keyImage} alt="keyImage" />{' '}
        <p className="font">{achieveTask}</p>{' '}
      </div>
      <div className="AchieveBox1">
        {' '}
        <img src={xImage} alt="xImage" />{' '}
        <p className="font">{5 - achieveTask}</p>{' '}
      </div>
      <div className="AchieveBox1">
        {' '}
        <img src={timerImage} alt="timerImage" />{' '}
        <p className="font">{`${minutes}`} min</p>{' '}
      </div>
      <div className="AchieveBox1">
        {' '}
        <img src={cupImage} alt="cupImage" /> <p className="font">{Ranking}</p>{' '}
      </div>
    </div>
  );
}

AchieveComponent.propTypes = {
  achieveTask: PropTypes.number.isRequired,
  Ranking: PropTypes.number.isRequired,
  timeSpent: PropTypes.number.isRequired,
};
