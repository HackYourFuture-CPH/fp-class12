import React from 'react';

class LocationComponent extends React.Component {
  state = { address: '' };

  componentDidMount() {
    const latitude = 55.661869;
    const longitude = 12.540742;

    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=216a941e5d7e4b5dbd4c778c87486d35`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ address: data.results[0].formatted });
      });
  }

  render() {
    return <p>{this.state.address}</p>;
  }
}

export default LocationComponent;
