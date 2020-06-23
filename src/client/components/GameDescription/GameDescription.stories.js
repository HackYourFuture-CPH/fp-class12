import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import GameDescription from './GameDescriptionComponent';

export default { title: 'GameDescription', decorators: [withKnobs] };

export const GameDescriptionComponent = () => (
  <GameDescription
    title={text('title', 'Treasure Hunt')}
    latitude={number('latitude', 53.661869)}
    longitude={number('longitude', 12.540742)}
  />
);
