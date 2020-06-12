import React from 'react';
import PropTypes from 'prop-types';

import QRCode from 'qrcode.react';

const QRcode = ({ value, size, fgColor, bgColor, level }) => {
  return (
    <div>
      <QRCode
        value={value}
        bgColor={bgColor}
        fgColor={fgColor}
        size={size}
        level={level}
      />
    </div>
  );
};

QRcode.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']).isRequired,
  size: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default QRcode;
