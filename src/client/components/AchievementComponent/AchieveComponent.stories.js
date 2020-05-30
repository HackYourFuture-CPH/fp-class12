import React from 'react';
import AchieveComponent from './AchieveComponent';
import { withKnobs, number } from '@storybook/addon-knobs';

export default { title: 'Achievement Component', decorators: [withKnobs] };
const achieveTask = number('achieve task', '1');
const Ranking = number('Ranking', '3');
const timeSpentPerSecond = number('spent time', '3000');

export const Component = () => (
  <AchieveComponent
    achieveTask={achieveTask}
    Ranking={Ranking}
    timeSpent={timeSpentPerSecond}
  />
);
