import React from 'react';
import PropTypes from 'prop-types';
import './SampleComponent.styles.css';

export default function SampleComponent({ title }) {
  return (
    <div className="sample-component">
      <h2>{title}</h2>
      <p>(this is a sample component)</p>
    </div>
  );
}

SampleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
