import React from 'react';
import Map from '../CircleAndMarkerCurrentLocation/MarkerCurrentLocation';
import Title from '../GameTitle/GameTitle';
import LocationComponent from '../LocationComponent/LocationComponent';
import Button from '../SubmitButton/SubmitButton';
import './GameDescriptionStyle.css';
import PropTypes from 'prop-types';

const GameDescription = ({ title, latitude, longitude, isOpen }) => {
  return (
    <div className="card">
      <div className="cardcontainer">
        <div className="map">
          <Map center={[latitude, longitude]} />
        </div>
        <div className="titleLocation">
          <div className="titleLocationwrapper">
            <Title title={title} />
            <LocationComponent latitude={latitude} longitude={longitude} />
          </div>
          <div className="choosebox">
            <Button ButtonTitle="choose" onClick={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

GameDescription.propTypes = {
  title: PropTypes.string.isRequired,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  isOpen: PropTypes.func.isRequired,
};
export default GameDescription;
