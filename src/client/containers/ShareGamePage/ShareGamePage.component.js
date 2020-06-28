import React, { useState } from 'react';
import '../../App.css';
import './shareGame.css';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import HeaderTitle from '../../components/Title/Title';
import Footer from '../../components/FooterComponent/FooterComponent';
import QRcode from '../../components/QRcode/QRcode';
import { Link } from 'react-router-dom';

const level = 'L';

function QrCode() {
  const [qrCode, SetQrCode] = useState('');
  fetch(`/api/qr/`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.qr);
      const gameCode = result.qr;

      SetQrCode(gameCode);
    });

  return <p className="qrcode">{qrCode}</p>;
}

export const ShareGamePage = () => (
  <section className="home bodycontainer">
    <HeaderTitle title="Scan QR-Code" />
    <div className="bodywrapper">
      <p className="sharegametext">
        share this code to the players to share this code
      </p>
      <div className="homelogocontainer">
        <div className="QRcode">
          <QRcode
            value="random code"
            fgColor="black"
            bgColor="white"
            size={250}
            level={level}
            includeMargin={false}
          />
        </div>
        <QrCode />
      </div>
      <Link to="/">
        <SubmitButton ButtonTitle="Back to Game" />
      </Link>
    </div>
    <Footer title="Test title" />
  </section>
);
