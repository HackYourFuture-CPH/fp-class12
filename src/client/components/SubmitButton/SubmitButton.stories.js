import React from 'react';
import Button from './SubmitButton';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Submit Button Component', decorators: [withKnobs] };

export const SubmitButton = () => {
  const ButtonTitle = text('title', 'Trial button');
  return <Button ButtonTitle={ButtonTitle} />;
};
