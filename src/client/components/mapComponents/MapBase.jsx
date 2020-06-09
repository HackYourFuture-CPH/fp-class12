import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import '../../../../node_modules/leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';

const MapBase = ({ zoom, center, style, children }) => {
  return (
    <Map center={center} zoom={zoom || 13} style={style}>
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
