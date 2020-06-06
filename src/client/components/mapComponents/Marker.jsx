import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import PropTypes from 'prop-types';

const MarkerWrapper = ({
  draggable,
  onUpdatePosition,
  position,
  icon,
  children,
}) => {
  return (
    <Marker
      draggable={draggable}
      onDragend={onUpdatePosition}
      position={position}
      icon={icon}
    >
      <Popup>{children}</Popup>
    </Marker>
  );
};

export default MarkerWrapper;

MarkerWrapper.defaultProps = {
  draggable: true,
  onUpdatePosition: undefined,
  children: undefined,
};

MarkerWrapper.propTypes = {
  icon: PropTypes.instanceOf(Icon).isRequired,
  draggable: PropTypes.bool,
  onUpdatePosition: PropTypes.func,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};
