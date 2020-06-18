import React from 'react';
import MapBase from './MapBase';
import Marker from './Marker';
import Icons from './Icons';
import PropTypes from 'prop-types';

const Map = ({ center, markers, currentPosition }) => {
  if (!center) {
    throw Error('Center position for map is not defined');
  }

  const markersToRender = currentPosition
    ? [
        ...markers,
        {
          id: null,
          position: currentPosition,
          icon: Icons.DefaultMapMarker,
        },
      ]
    : markers;
  return (
    <MapBase center={center}>
      {markersToRender.map((marker) => (
        <Marker
          key={marker.id}
          draggable={true}
          position={marker.position}
          icon={marker.icon}
        />
      ))}
    </MapBase>
  );
};
export default Map;

Map.defaultProps = {
  markers: [],
  currentPosition: undefined,
};

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentPosition: PropTypes.arrayOf(PropTypes.number),
  markers: PropTypes.arrayOf(PropTypes.objectOf(typeof Marker)),
};
