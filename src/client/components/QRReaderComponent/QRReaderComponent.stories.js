import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import QRReaderComponent from './QRReaderComponent';

export default {
  title: 'QR Reader Component',
  decorators: [withKnobs],
};
export const Component = () => <QRReaderComponent title="Test title" />;
