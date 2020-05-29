import React, { Component, createRef } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import logo from '../../assets/images/treasure.png';

const treasureIcon = new Icon({
  iconUrl: logo,
  iconSize: [71, 71],
});

class Mymap extends Component {
  state = {
    center: {
      lat: 55.661869,
      lng: 12.540742,
    },
    marker: {
      lat: 55.661869,
      lng: 12.540742,
    },
    zoom: 13,
    selectedOption: '',
    draggable: true,
  };

  refmarker = createRef();

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable });
  };

  updatePosition = () => {
    const marker = this.refmarker.current;
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng(),
      });
    }
  };

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  render() {
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];
    const coordinates = [this.state.center.lat, this.state.center.lng];
    return (
      <div className="bodycontainer">
        <div className="radiobuttons">
          <input
            type="radio"
            value="stamen"
            onChange={this.handleOptionChange}
            checked={this.state.selectedOption === 'stamen'}
          />{' '}
          Stamen watercolor
          <input
            type="radio"
            value="cyclo"
            onChange={this.handleOptionChange}
            checked={this.state.selectedOption === 'cyclo'}
          />{' '}
          CycloOSM
        </div>

        <Map
          center={coordinates}
          zoom={this.state.zoom}
          style={{ height: '400px' }}
        >
          {this.state.selectedOption === 'cyclo' ? (
            <TileLayer
              attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
          ) : (
            <TileLayer
              attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
            />
          )}

          <Marker
            draggable={this.state.draggable}
            onDragend={this.updatePosition}
            position={markerPosition}
            ref={this.refmarker}
            icon={treasureIcon}
          >
            <Popup>
              <span>I am Draggable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default Mymap;
