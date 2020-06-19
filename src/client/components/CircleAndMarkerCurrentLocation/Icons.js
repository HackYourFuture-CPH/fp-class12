import L from 'leaflet';
import DefaultMapMarker from '../../assets/images/icons/pin-icon.svg';

const markerIcon = L.icon({
  iconUrl: DefaultMapMarker,
  iconSize: [30, 30],
  popupAnchor: [0, -11],
});

export { markerIcon };
