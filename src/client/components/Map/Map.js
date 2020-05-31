import React, { useEffect } from 'react';
import '.../../../node_modules/leaflet/dist/leaflet.css';
import L from 'leaflet';

function Mymap({ latitude, longitude }) {
  useEffect(() => {
    L.map('map', {
      center: [latitude, longitude],
      zoom: 13,
      layers: [
        L.tileLayer(
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

export default Mymap;
