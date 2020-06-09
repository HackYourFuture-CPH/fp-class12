import React from 'react';
import AchieveComponent from './AchieveComponent';

import { withKnobs, number } from '@storybook/addon-knobs';

export default { title: 'Achievement Component', decorators: [withKnobs] };
export const Component = () => (
  <AchieveComponent
    achieveTask={number('achieve task', 1)}
    Ranking={number('Ranking', 3)}
    timeSpent={number('spent time', 5)}
  />
);
