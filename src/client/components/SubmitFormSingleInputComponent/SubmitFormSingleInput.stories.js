import React from 'react';
import SingleInputFormComponent from './SubmitFormSingleInput';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Submit Forms', decorators: [withKnobs] };

export const SubmitFormSingleInput = () => (
  <SingleInputFormComponent
    inputLabel={text('Title', 'Team name')}
    value={text('Value', 'Enter name')}
    ButtonTitle={text('Button Label', 'Trial button')}
  />
);
