import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

import './QRReaderComponent.styles.css';

export default function QRReaderComponent() {
  // const [result, setResult] = useState(); I was getting an error committing my changes because the value wasn't used, but is needed for future use.
  const [error, setErr] = useState();

  return (
    <section className="qr-reader-background">
      <div className="qr-reader-frame">
        {error ? (
          <p>{error.message}</p>
        ) : (
          <QrReader
            delay={300}
            onError={(err) => setErr(err)}
            // onScan={(data) => setResult(data)}
            className="qr-reader"
            showViewFinder={false}
          />
        )}
      </div>
    </section>
  );
}
