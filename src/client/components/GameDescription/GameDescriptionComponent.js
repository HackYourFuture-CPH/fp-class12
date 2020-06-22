import React from 'react';
import Map from '../mapComponents/Map';
import Title from '../GameTitle/GameTitle';
import LocationComponent from '../LocationComponent/LocationComponent';
import Button from '../SubmitButton/SubmitButton';
import './GameDescriptionStyle.css';
import PropTypes from 'prop-types';

import { markerIcon } from '../../assets/images/icons/pin-icon-map.svg';
import { Marker } from 'react-leaflet';

const GameDescription = ({ title, latitude, longitude }) => {
  return (
    <div className="card">
      <div className="cardcontainer">
        <div className="map">
          <Map center={[latitude, longitude]}>
            <Marker center={[latitude, longitude]} icon={markerIcon} />
          </Map>
        </div>
        <div className="titleLocation">
          <div className="titleLocationwrapper">
            <Title title={title} />
            <LocationComponent latitude={latitude} longitude={longitude} />
          </div>
          <div className="choosebox">
            <Button ButtonTitle="choose" />
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
};
export default GameDescription;
