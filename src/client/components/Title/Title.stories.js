import React from 'react';
import HeaderTitle from './Title';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Header Title', decorators: [withKnobs] };

export const Title = () => {
  const title = text('title', 'Scan QR-Code');
  return <HeaderTitle title={title} />;
};
