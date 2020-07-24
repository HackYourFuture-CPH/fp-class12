import React, { useState } from 'react';
import '../../App.css';
import './shareGame.css';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import HeaderTitle from '../../components/Title/Title';
import Footer from '../../components/FooterComponent/FooterComponent';
import QRcode from '../../components/QRcode/QRcode';
import { Link } from 'react-router-dom';

const level = 'L';

function GameCode() {
  const [gameQrCode, setGameQrCode] = useState('');

  fetch(`/api/qr/2`)
    .then((response) => response.json())
    .then((result) => {
      const resultGameCode = result.QR;

      setGameQrCode(resultGameCode);
    });

  return <p className="qrcode">{gameQrCode}</p>;
}

export const ShareGamePage = () => (
  <section className="home bodycontainer">
    <HeaderTitle title="Scan QR-Code" />
    <div className="bodywrapper">
      <p className="sharegametext">
        share this code to the players to join the game
      </p>
      <div className="homelogocontainer">
        <div className="QRcode">
          <QRcode
            className="qrcodebar"
            value="random code"
            fgColor="black"
            bgColor="white"
            size={250}
            level={level}
            includeMargin={false}
          />
        </div>
        <GameCode />
      </div>
      <Link to="/">
        <SubmitButton buttonTitle="Back to game" />
      </Link>
    </div>
    <Footer />
  </section>
);
