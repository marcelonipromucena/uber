import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

// import { Container } from './styles';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="YOUR_API_KEY"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
