import React from 'react';
import SingleAnswer from './SingleAnswer';
import { withKnobs, radios } from '@storybook/addon-knobs';

export default {
  title: 'SingleAnswerComponent',
  decorators: [withKnobs],
};

const label = 'In which direction is the little mermaid?';
const options = {
  NE: 'NE',
  SE: 'SE',
};
const groupId = 'GROUP-ID1';

export const Component = () => {
  const value = radios(label, options, groupId);
  return (
    <SingleAnswer
      title="In which direction is the little mermaid?"
      value={value}
    />
  );
};
