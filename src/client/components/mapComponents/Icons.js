import { Icon } from 'leaflet';
import DefaultMapMarker from '../../assets/images/icons/pin-icon.svg';
import TreasureMapMarker from '../../assets/images/icons/pin-icon-map.svg';

export default {
  TreasureIcon: new Icon({
    iconUrl: TreasureMapMarker,
    iconSize: [71, 71],
  }),
  DefaultMapMarker: new Icon({
    iconUrl: DefaultMapMarker,
    iconSize: [71, 71],
  }),
};
