import React from 'react';
import Mymap from '../Map/Map';
import Title from '../Title/Title';
import LocationComponent from '../LocationComponent/LocationComponent';
import Button from '../ButtonComponent/Button';
import './GameDescriptionStyle.css';

const GameDescription = () => {
  return (
    <div className="card">
      <div className="container">
        <Mymap />
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
