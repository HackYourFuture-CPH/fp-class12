import React from 'react';
import '../../App.css';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import HeaderTitle from '../../components/Title/Title';
import Footer from '../../components/FooterComponent/FooterComponent';
import QRcode from '../../components/QRcode/QRcode';
import { Link } from 'react-router-dom';

const level = 'L';
export const ShareGamePage = () => (
  <section className="home bodycontainer">
    <HeaderTitle title="Scan QR-Code" />
    <div className="bodywrapper">
      <p>share this code to the players to share this code</p>
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
      </div>
      <Link to="/">
        <SubmitButton ButtonTitle="Back to Game" />
      </Link>
    </div>
    <Footer title="Test title" />
  </section>
);
