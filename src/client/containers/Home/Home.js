import React from 'react';
import '../../App.css';
import GameLogo from '../../assets/images/logo/logo-treasure-hunt-withe.svg';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Footer from '../../components/FooterComponent/FooterComponent';

export const Home = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <div className="homelogocontainer">
        <div className="homelogo">
          <img src={GameLogo} alt="Game Logo" />
        </div>
        <h1>Treasure Hunt</h1>
      </div>
      <SubmitButton
        ButtonTitle="Join Game"
        onClick={() => {
          location.href = '../share-game-page';
        }}
      />
      <SubmitButton
        ButtonTitle="Start Game"
        onClick={() => {
          location.href = '../create-team-page';
        }}
      />
    </div>
    <Footer />
  </section>
);
