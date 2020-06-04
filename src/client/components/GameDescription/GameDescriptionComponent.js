import React from 'react';
import Mymap from '../Map/Map';
import Title from '../GameTitle/GameTitle';
import LocationComponent from '../LocationComponent/LocationComponent';
import Button from '../ButtonComponent/Button';
import './GameDescriptionStyle.css';

const GameDescription = () => {
  return (
    <div className="card">
      <div className="container">
        <Mymap latitude="55.661869" longitude="12.540742" />
        <div className="titleLocation">
          <div>
            <Title title="Title Game" />
            <LocationComponent />
          </div>
          <div>
            <Button buttonTitle="choose" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDescription;
