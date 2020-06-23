import React from 'react';
import Footer from '../../components/FooterComponent/FooterComponent';
import Map from '../../components/CircleAndMarkerCurrentLocation/MarkerCurrentLocation';

export const GamePage = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <Map center={[55.847636, 22.02300283]} />
    </div>
    <Footer title="Test title" />
  </section>
);
