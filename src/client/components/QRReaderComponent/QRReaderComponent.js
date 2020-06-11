import React from 'react';
import './QRReaderComponent.styles.css';

export default function QRReaderComponent() {
  return (
    <div className="qr-reader-background">
      <div className="qr-frame">
        <div className="top">
          <div className="qr-frame-corner top-left"></div>
          <div className="qr-frame-corner top-right"></div>
        </div>
        <div className="bottom">
          <div className="qr-frame-corner bottom-left"></div>
          <div className="qr-frame-corner bottom-right"></div>
        </div>
      </div>
    </div>
  );
}
