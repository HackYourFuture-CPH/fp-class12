import React from 'react';
import Timer from './Timer';
import { withKnobs, number } from '@storybook/addon-knobs';

export default { title: 'Timer', decorators: [withKnobs] };

export const CountdownTimer = () => <Timer countdown={number('Timer', 60)} />;
