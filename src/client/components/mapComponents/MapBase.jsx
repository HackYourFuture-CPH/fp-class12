import React, { useContext } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import '../../../../node_modules/leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import DimensionsContext from './dimentionsContext';

const MapBase = ({ zoom, center, children }) => {
  const dimensions = useContext(DimensionsContext);
  return (
    <Map center={center} zoom={zoom || 13} style={dimensions}>
      <TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" />

      {children}
    </Map>
  );
};

export default MapBase;

MapBase.defaultProps = {
  zoom: 13,
  children: undefined,
};

MapBase.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element),
};
