import React from 'react';
import TeamTitle from './TeamTitle';
import TeamAvatar from './TeamAvatar';
import AmountOfTime from './AmountOfTime';
import PropTypes from 'prop-types';
import './LeaderBoard.styles.css';

export default function LeaderBoardItem({ id, avatar, title, timeSpent }) {
  if (!id) return null;
  // i got this err on the consul when test id with empty field on storybook
  // Warning: Failed prop type: The prop `id` is marked as required in `LeaderBoardItem`,
  // but its value is `null`.
  return (
    <li className="leader-board-item" key={id}>
      <div className="leader-board-avatar">
        <TeamAvatar avatar={avatar} />
      </div>
      <div className="leader-board-content">
        <TeamTitle title={title} />
        <AmountOfTime timeSpent={timeSpent} />
      </div>
    </li>
  );
}

LeaderBoardItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeSpent: PropTypes.number.isRequired,
};
