import React from 'react';
import HeaderTitle from '../../components/Title/Title';
import GameDescription from '../../components/GameDescription/GameDescriptionComponent';
import './PickGamePage.style.css';
import FooterComponent from '../../components/FooterComponent/FooterComponent';

export const PickGamePage = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <HeaderTitle title="Pick a Map" />

      <div className="PickGamePage">
        <GameDescription
          title="Pick a Maps"
          latitude={55.661869}
          longitude={12.540742}
          center={[55.661869, 12.540742]}
        />
      </div>
    </div>
    <FooterComponent title="Test title" />
  </section>
);
