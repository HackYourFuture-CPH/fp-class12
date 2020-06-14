import React from 'react';
import QRcode from './QRcode';

import {
  withKnobs,
  text,
  color,
  number,
  select,
  boolean,
} from '@storybook/addon-knobs';

export default { title: 'QRCode', decorators: [withKnobs] };

export const QRCode = () => (
  <div>
    <QRcode
      value={text('Text', 'random code')}
      fgColor={color('fgColor', 'black')}
      bgColor={color('bgColor', 'white')}
      size={number('Size', 300)}
      level={select('level', ['L', 'M', 'Q', 'H'])}
      includeMargin={boolean('includeMargin', false)}
    />
  </div>
);
