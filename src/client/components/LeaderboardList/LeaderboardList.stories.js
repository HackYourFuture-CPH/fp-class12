import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import LeaderBoardItem from './LeaderBoardItem';
import { users } from './users';

export default {
  title: 'Test LeaderBoard Component',
  decorators: [withKnobs],
};

export const TestLeaderBoardComp = () => {
  return (
    <ul>
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
