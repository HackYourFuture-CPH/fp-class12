import React from 'react';
import './ResultMessageModalWindow.styles.css';
import PropTypes from 'prop-types';
import TeamAvatar from './TeamAvatar.component';
import TeamName from './TeamName.component';
import CelebrationImage from './CelebrationImage.component';
import ResultTask from './ResultTask.component';
import FinalMessage from './FinalMessage.component';

export default function ResultMessageModalWindow(props) {
  const { title, correctAnswer, checkpoints } = props;
  return (
    <div className="ResultMessageModalWindow-component">
      <div className="teamAvatar-component">
        <TeamAvatar />
      </div>
      <div className="container-div">
        <TeamName title={title} />
        <CelebrationImage correctAnswer={correctAnswer} />
        <ResultTask correctAnswer={correctAnswer} />
        <FinalMessage correctAnswer={correctAnswer} checkpoints={checkpoints} />
      </div>
    </div>
  );
}

ResultMessageModalWindow.propTypes = {
  title: PropTypes.string.isRequired,
  correctAnswer: PropTypes.number.isRequired,
  checkpoints: PropTypes.number.isRequired,
};
