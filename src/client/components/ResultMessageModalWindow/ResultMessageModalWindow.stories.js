import React from 'react';
import ResultMessageModalWindow from './ResultMessageModalWindow.component';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Result Message Modal Window',
  decorators: [withKnobs],
};
const title = text('Team Name', 'Pirates Hat');
const correctAnswer = number('correct answer', '4');
const checkpoints = number('check points', '4');
export const Component = () => (
  <ResultMessageModalWindow
    title={title}
    correctAnswer={correctAnswer}
    checkpoints={checkpoints}
  />
);
