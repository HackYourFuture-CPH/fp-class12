import React from 'react';
import TeamTitle from './TeamTitle';
import TeamAvatar from './TeamAvatar';
import AmountOfTime from './AmountOfTime';
import './LeaderBoard.styles.css';

export default function LeaderBoardItem({ id, avatar, title, timeSpent }) {
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
