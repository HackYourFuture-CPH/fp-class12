import React from 'react';
import ButtonComponent from './ButtonComponent';

import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Button Component', decorators: [withKnobs] };

export const Component = () => (
  <ButtonComponent title={text('Title', 'Trial button')} />
);
