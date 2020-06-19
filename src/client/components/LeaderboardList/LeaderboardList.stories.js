import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import LeaderBoardItem from './LeaderBoardItemComponent';
import { users } from './users';
// i made array of users as source to test LeaderBoard component on storybook

export default {
  title: 'LeaderBoard Component',
  decorators: [withKnobs],
};

export const TestLeaderBoardComp = () => {
  return (
    <ul className="leaderboardlist">
      {users.map((user) => (
        <LeaderBoardItem
          key={user.id}
          id={number(`id ${user.id}`, user.id)}
          avatar={text(`avatar ${user.id}`, user.avatar)}
          title={text(`title ${user.id}`, user.title)}
          timeSpent={number(`spent ${user.id}`, user.timeSpent)}
        />
      ))}
    </ul>
  );
};
