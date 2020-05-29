import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

import '.../../../node_modules/leaflet/dist/leaflet.css';

class Mymap extends React.Component {
  state = {
    lat: 55.661869,
    lng: 12.540742,
    zoom: 13,
  };

  render() {
    const coordinates = [this.state.lat, this.state.lng];
    return (
      <Map
        center={coordinates}
        zoom={this.state.zoom}
        style={{
          height: '300px',
          width: '100%',
          borderTopRightRadius: '15px',
          borderTopLeftRadius: '15px',
        }}
      >
        <TileLayer
          attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
        />

        <Marker position={coordinates} />
      </Map>
    );
  }
}

export default Mymap;
