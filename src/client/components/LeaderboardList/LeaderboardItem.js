import React from 'react';
import TeamTitle from './TeamTitle';
import TeamAvatar from './TeamAvatar';
import AmountOfTime from './AmountOfTime';
import './Leaderboard.styles.css';

export default function LeaderboardItem({ id, avatar, title, timeSpent }) {
  return (
    <li className="leaderboard-item" key={id}>
      <div className="leaderboard-avatar">
        <TeamAvatar avatar={avatar} />
      </div>
      <div className="leaderboard-content">
        <TeamTitle title={title} />
        <AmountOfTime timeSpent={timeSpent} />
      </div>
    </li>
  );
}
