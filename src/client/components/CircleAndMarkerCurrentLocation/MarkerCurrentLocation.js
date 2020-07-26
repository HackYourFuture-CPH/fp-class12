import React, { useState, useEffect } from 'react';
import { Marker, Popup, CircleMarker, Polygon } from 'react-leaflet';
import { markerIcon } from './Icons';
import MapBase from '../mapComponents/MapBase';
import axios from 'axios';

const MarkerCurrentLocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [center, setCenter] = useState([55.68232688892504, 12.570762634277344]);
  const [coords, setCoords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
    };
    setIsLoading(true);
    navigator.geolocation.watchPosition(geoSuccess, geoFailure, geoOptions);
  }, []);

  useEffect(() => {
    axios
      .get('api/map-coordinates')
      .then((res) => {
        setCoords(res.data);
        console.log(res.data);
      })
      .catch(() => {
        alert('error ...');
      });
  }, []);

  const geoSuccess = (position) => {
    setIsLoading(false);
    setCenter([position.center.latitude, position.center.longitude]);
  };

  const geoFailure = (err) => {
    setIsLoading(true);
    setError(err.message);
    throw Error(err.message);
  };

  return (
    <MapBase zoom={14} center={center}>
      <Marker position={center} icon={markerIcon}>
        <Popup>Marker current location</Popup>
      </Marker>

      {coords.map((data, index) => {
        const coordinates = [
          [data.long_top_left, data.lat_top_left],
          [data.long_top_right, data.lat_top_right],
          [data.long_bottom_left, data.lat_bottom_left],
        ];

        return (
          <Polygon
            key={`${index + 4}`}
            color="purple"
            fillOpacity={0.1}
            weight={0}
            positions={coordinates}
          />
        );
      })}

      {!isLoading && !error && (
        <CircleMarker
          center={center}
          fillColor="red"
          radius={30}
          fillOpacity={0.2}
          weight={0}
        >
          <Popup>circle marker current location</Popup>
        </CircleMarker>
      )}
    </MapBase>
  );
};

export default MarkerCurrentLocation;
