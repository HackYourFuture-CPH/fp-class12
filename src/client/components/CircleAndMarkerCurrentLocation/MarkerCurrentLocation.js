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
      timeOut: 2000,
    };
    setIsLoading(true);
    navigator.geolocation.watchPosition(geoSuccess, geoFailure, geoOptions);

    axios
      .get('/api/mapcoordinates')
      .then((res) => {
        console.log(res.data[0]);
        setCoords(res.data[0]);
        console.log(res.data[0].long_top_left);
      })
      .catch(() => {
        alert('error ...');
      });
  }, []);

  const geoSuccess = (position) => {
    setIsLoading(false);
    setCenter([position.coords.latitude, position.coords.longitude]);
  };

  const geoFailure = (err) => {
    setIsLoading(true);
    setError(err.message);
    throw Error(err.message);
  };

  return (
    <MapBase zoom={14} center={[55.68232688892504, 12.570762634277344]}>
      <Marker position={center} icon={markerIcon}>
        <Popup>Marker current location</Popup>
      </Marker>

      {coords.map((data, index) => (
        <Polygon
          key={`${index+1}`}
          color="purple"
          fillOpacity={0.2}
          positions={[
            [data.lat_top_left, data.long_top_left],
            [data.lat_top_right, data.long_top_right],
            [data.lat_bottom_left, data.long_bottom_left],
            [data.lat_bottom_left, data.long_bottom_left],
            [data.clat_bottom_right, data.long_bottom_right],
          ]}
        />
      ))}

      {/* <Polygon
        color="blue"
        fillOpacity={0.1}
        weight={0}
        positions={[
          [55.70486998788966, 12.545356750488281],
          [55.70486998788966, 12.594623565673828],
          [55.66374083067071, 12.594623565673828],
          [55.663934480953436, 12.545356750488281],
        ]}
      /> */}
      {/* <GeoJSON
        color="red"
        fillOpacity={0.8}
        weight={10}
        type="Point"
        coordinates= {[
          [55.70486998788966, 12.545356750488281],
          [55.70486998788966, 12.594623565673828],
          [55.66374083067071, 12.594623565673828],
          [55.663934480953436, 12.545356750488281],
        ]}
      /> */}

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
