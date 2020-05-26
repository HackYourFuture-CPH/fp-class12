import React from 'react';
import TeamTitle from './TeamTitle';
import TeamAvatar from './TeamAvatar';
import AmountOfTime from './AmountOfTime';
import './Leaderboard.styles.css';
import image1 from '../../assets/images/avatar1-ce.png';
import image2 from '../../assets/images/avatar2-ce.png';
import image3 from '../../assets/images/avatar3-ce.png';
import image4 from '../../assets/images/avatar4-ce.png';

export default function Leaderboard() {
  const users = [
    {
      id: 1,
      title: 'First team',
      avatar: image1,
      timeSpent: 111,
    },
    {
      id: 2,
      title: 'Second team',
      avatar: image2,
      timeSpent: 12222,
    },
    {
      id: 3,
      title: 'Third team',
      avatar: image3,
      timeSpent: 33333,
    },
    {
      id: 4,
      title: 'Forth team',
      avatar: image4,
      timeSpent: 44444,
    },
  ];

  return (
    <ul className="leaderboard-list">
      {users.map((user) => (
        <li className="leaderboard-item" key={user.id}>
          <div className="leaderboard-avatar">
            <TeamAvatar avatar={user.avatar} />
          </div>
          <div className="leaderboard-content">
            <TeamTitle title={user.title} />
            <AmountOfTime timeSpent={user.timeSpent} />
          </div>
        </li>
      ))}
    </ul>
  );
}
