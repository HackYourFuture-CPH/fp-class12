import React from 'react';
import PropTypes from 'prop-types';
import './AchieveComponent.styles.css';
import keyImage from '../../assets/images/icons/kye-icon.svg';
import xImage from '../../assets/images/icons/cross-icon.svg';
import timerImage from '../../assets/images/icons/timer-icon.svg';
import cupImage from '../../assets/images/icons/kup-icon.svg';
import AchievementBox from './AchievementBox';

export default function Achievement({ achieveTask, Ranking, timeSpent }) {
  const minutes = Math.floor(timeSpent);

  return (
    <div className="achieveMain">
      <div className="achieveRow">
        <AchievementBox
          achieveTask={achieveTask}
          image={keyImage}
          altImage="keyImage"
        />
        <AchievementBox
          achieveTask={`${minutes} min`}
          image={timerImage}
          altImage="timerImage"
        />
      </div>

      <div className="achieveRow">
        <AchievementBox
          achieveTask={5 - achieveTask}
          image={xImage}
          altImage="xImage"
        />
        <AchievementBox
          achieveTask={Ranking}
          image={cupImage}
          altImage="cupImage"
        />
      </div>
    </div>
  );
}

Achievement.propTypes = {
  achieveTask: PropTypes.number.isRequired,
  Ranking: PropTypes.number.isRequired,
  timeSpent: PropTypes.number.isRequired,
};
