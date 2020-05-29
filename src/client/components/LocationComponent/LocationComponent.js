import React from 'react';

class LocationComponent extends React.Component {
  state = { adress: '' };

  componentDidMount() {
    fetch(
      'https://api.opencagedata.com/geocode/v1/json?q=55.661869+12.540742&key=216a941e5d7e4b5dbd4c778c87486d35',
    )
      .then((respoonse) => respoonse.json())
      .then((data) => {
        this.setState({ adress: data.results[0].formatted });
      });
  }

  render() {
    return <p>{this.state.adress}</p>;
  }
}

export default LocationComponent;
