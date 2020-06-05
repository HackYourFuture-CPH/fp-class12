import React, { useState } from 'react';

function LocationComponent() {
  const latitude = 55.661869;
  const longitude = 12.540742;
  const [location, setLocation] = useState();

  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=216a941e5d7e4b5dbd4c778c87486d35`,
  )
    .then((response) => response.json())
    .then((data) => {
      setLocation(data.results[0].formatted);
    });

  return <p>{location}</p>;
}

export default LocationComponent;
