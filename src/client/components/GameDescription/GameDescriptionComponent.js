import React from 'react';
import Mymap from '../Map/Map';
import Title from '../GameTitle/GameTitle';
import LocationComponent from '../LocationComponent/LocationComponent';
import Button from '../SubmitButton/SubmitButton';
import './GameDescriptionStyle.css';

const GameDescription = () => {
  return (
    <div className="card">
      <div className="cardcontainer">
        <Mymap latitude="55.661869" longitude="12.540742" />
        <div className="titleLocation">
          <div className="titleLocationwrapper">
            <Title title="Title Game" />
            <LocationComponent />
          </div>
          <div className="choosebox">
            <Button ButtonTitle="choose" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDescription;
