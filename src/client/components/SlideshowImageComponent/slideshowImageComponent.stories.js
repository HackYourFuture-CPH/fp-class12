import React from 'react';
import SlideshowImageComponent from './SlideshowImageComponent';
import { withKnobs, number } from '@storybook/addon-knobs';

export default { title: 'Avatars Component', decorators: [withKnobs] };

export const Avatars = () => {
  return (
    <SlideshowImageComponent currentImageIndex={number('imageIndex', 0)} />
  );
};
