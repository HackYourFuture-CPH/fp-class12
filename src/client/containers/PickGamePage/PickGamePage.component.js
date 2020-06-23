import React from 'react';
import HeaderTitle from '../../components/Title/Title';
import GameDescription from '../../components/GameDescription/GameDescriptionComponent';
import Footer from '../../components/FooterComponent/FooterComponent';

export const PickGamePage = () => (
  <div>
    <HeaderTitle title="Pick a Map" />
    <section className="home bodycontainer">
      <div className="bodywrapper map">
        <GameDescription
          title="Pick a Maps"
          latitude="55.661869"
          longitude="12.540742"
        />
      </div>
    </section>
      <Footer title="Test title" />
  </div>
);
