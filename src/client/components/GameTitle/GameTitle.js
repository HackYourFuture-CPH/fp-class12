import React from 'react';
import PropTypes from 'prop-types';
import './GameTitle.css';

const Title = ({ title }) => {
  return <div className="title">{title}</div>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
