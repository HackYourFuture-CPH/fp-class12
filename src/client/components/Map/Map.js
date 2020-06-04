import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '.../../../node_modules/leaflet/dist/leaflet.css';
import map from 'leaflet';

function Mymap({ latitude, longitude }) {
  useEffect(() => {
    map.map('map', {
      center: [latitude, longitude],
      zoom: 13,
      layers: [
        map.tileLayer(
          'https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
          {
            attribution:
              '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        ),
      ],
    });
  });

  return <div id="map" />;
}

Mymap.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};

export default Mymap;
