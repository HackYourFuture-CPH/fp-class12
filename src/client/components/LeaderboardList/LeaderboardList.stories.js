import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import image from '../../assets/images/avatar1-ce.png';
import LeaderBoardItem from './LeaderBoardItem';

export default {
  title: 'Test LeaderBoard Component',
  decorators: [withKnobs],
};

export const TestLeaderBoardComp = () => {
  return (
    <ul>
      <LeaderBoardItem
        id={number('id', 1)}
        avatar={text('src', image)}
        title={text('title', 'first')}
        timeSpent={number('spent', 1)}
      />
    </ul>
  );
};
