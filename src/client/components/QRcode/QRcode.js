import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'react-qr-code';

const propTypes = {
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
};

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

QRCode.propTypes = propTypes;

export default QRcode;
