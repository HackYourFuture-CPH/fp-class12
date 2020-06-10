import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import NavigationalButtonComponent from './NavigationalButtonComponent';

export default {
  title: 'NavigationalButton Component',
  decorators: [withKnobs],
};

export const Component = () => (
  <NavigationalButtonComponent
    content={text('content')}
    imgSrc={text('imgSrc')}
    alt={text('icon')}
    href={text('href')}
  />
);
