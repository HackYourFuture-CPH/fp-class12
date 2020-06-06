import React from 'react';
import SingleAnswer from './SingleAnswer';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'SingleAnswerComponent',
  decorators: [withKnobs],
};

export const Component = () => {
  const question = text(
    'Question',
    'In which direction is the little mermaid?',
  );
  const option1 = text('Answer1', 'NE');
  const option2 = text('Answer2', 'SE');
  const checkbox = select(
    'Type',
    {
      checkbox: 'checkbox',
      radio: 'radio',
    },
    'checkbox',
  );

  return (
    <SingleAnswer
      question={question}
      option1={option1}
      option2={option2}
      checkbox={checkbox}
    />
  );
};
