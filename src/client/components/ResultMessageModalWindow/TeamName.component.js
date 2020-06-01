import React from 'react';
import PropTypes from 'prop-types';
import './ResultMessageModalWindow.styles.css';

export default function TeamName({ title }) {
  return (
    <div className="team_name-component">
      <h1> Team {title}</h1>
    </div>
  );
}

TeamName.propTypes = {
  title: PropTypes.string.isRequired,
};
