import React from 'react';
import SingleInputFormComponent from './SingleInputFormComponent';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Form Component', decorators: [withKnobs] };

export const Component = () => (
  <SingleInputFormComponent
    inputLabel={text('Title', 'Team name')}
    value={text('Value', 'Enter name')}
    ButtonTitle={text('Button Label', 'Trial button')}
  />
);
