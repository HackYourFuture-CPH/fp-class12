import React from 'react';
import ResultMessageModalWindow from './ResultMessageModalWindow.component';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Result Message Modal Window',
  decorators: [withKnobs],
};

export const Component = () => (
  <ResultMessageModalWindow
    title={text('Team Name', 'Pirates Hat')}
    correctAnswer={number('correct answer', '4')}
    checkpoints={number('check points', '4')}
  />
);
