import React from 'react';
import PropTypes from 'prop-types';
import './ResultMessageModalWindow.styles.css';

export default function TeamName({ title }) {
  return <h3 className="team_name-component"> Team {title} </h3>;
}

TeamName.propTypes = {
  title: PropTypes.string.isRequired,
};
