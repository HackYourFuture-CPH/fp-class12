import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapCircleMarker.css';
import iconSrc from '../../assets/images/icons/pin-icon.svg';

const markerIcon = L.icon({
  iconUrl: iconSrc,
  iconAnchor: [12.5, 41],
  iconSize: [35, 41],
  popupAnchor: [0, -41],
});

class MapCircleMarker extends Component {
  isMounted = false;

  state = {
    ready: false,
    lat: 55.6617063,
    lng: 12.5407521,
    zoom: 13,
    error: null,
  };

  componentDidMount() {
    this.isMounted = true;

    const geoOptions = {
      enableHighAccuracy: true,
      timeOut: 10000,
      maximumAge: 60 * 60 * 24,
    };
    if (this.isMounted) {
      this.setState({ ready: false, error: null });
      navigator.geolocation.getCurrentPosition(
        this.geoSuccess,
        this.geoFailure,
        geoOptions,
      );
    }
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  geoSuccess = (position) => {
    this.setState({
      ready: true,
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  geoFailure = (err) => {
    this.setState({ error: err.message });
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className="map-container" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>i am the marker</Popup>
        </Marker>
        {!this.state.ready ? (
          <div>{this.state.error}</div>
        ) : (
          <CircleMarker
            center={position}
            fillColor="red"
            radius={50}
            fillOpacity={0.5}
          />
        )}
      </Map>
    );
  }
}

export default MapCircleMarker;
