import React from 'react';
import SliderDotsComponent from './SliderDotsComponent';
import { withKnobs, number } from '@storybook/addon-knobs';

export default { title: 'Dot Component', decorators: [withKnobs] };

export const MagicDots = () => {
  return <SliderDotsComponent noOfDots={number('dotsSlider', 4)} />;
};
