import React, { useState, useEffect } from 'react';
import { Marker, Popup, CircleMarker } from 'react-leaflet';
import { markerIcon } from './Icons';
import MapBase from '../mapComponents/MapBase';

const MarkerCurrentLocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lat, setLat] = useState(55.6617063);
  const [lng, setLng] = useState(12.5407521);
  const [error, setError] = useState(null);

  useEffect(() => {
    const geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
    };
    setIsLoading(true);
    navigator.geolocation.watchPosition(geoSuccess, geoFailure, geoOptions);
  }, []);

  const geoSuccess = (position) => {
    setIsLoading(false);
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  };

  const geoFailure = (err) => {
    setIsLoading(true);
    setError(err.message);
    throw Error(err.message);
  };

  return (
    <MapBase zoom={13} center={[lat, lng]}>
      <Marker position={[lat, lng]} icon={markerIcon}>
        <Popup>Marker current location</Popup>
      </Marker>
      {!isLoading && !error && (
        <CircleMarker
          center={[lat, lng]}
          fillColor="red"
          radius={40}
          fillOpacity={0.5}
        >
          <Popup>circle marker current location</Popup>
        </CircleMarker>
      )}
    </MapBase>
  );
};

export default MarkerCurrentLocation;
