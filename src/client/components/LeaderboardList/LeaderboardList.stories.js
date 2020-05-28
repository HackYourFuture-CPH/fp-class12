import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import ima from '../../assets/images/avatar1-ce.png';
import LeaderboardItem from './LeaderboardItem';

export default {
  title: 'Test Leaderborad Component',
  decorators: [withKnobs],
};

export const TestLeaderboradComp = () => {
  return (
    <ul>
      <LeaderboardItem
        id={number('id', 1)}
        avatar={text('src', ima)}
        title={text('title', 'first')}
        timeSpent={number('spent', 1)}
      />
    </ul>
  );
};
