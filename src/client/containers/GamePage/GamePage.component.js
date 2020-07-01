import React from 'react';
import Footer from '../../components/FooterComponent/FooterComponent';
import Map from '../../components/CircleAndMarkerCurrentLocation/MarkerCurrentLocation';
import Scores from '../../components/AchievementComponent/Scores';
import keyImage from '../../assets/images/icons/kye-icon.svg';
import timerImage from '../../assets/images/icons/timer-icon.svg';
import cupImage from '../../assets/images/icons/kup-icon.svg';

const divStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  top: '35px',
  zIndex: '100',
  color: '#ccc',
};

export const GamePage = () => (
  <div>
    <div style={divStyle}>
      <Scores achieveTask={`${5} min`} image={timerImage} />
      <Scores achieveTask={5} image={keyImage} style={{ color: '#ccc' }} />
      <Scores achieveTask={5000} image={cupImage} />
    </div>
    <section className="home bodycontainer">
      <div className="bodywrapper">
        <Map />
      </div>
      <Footer />
    </section>
  </div>
);
