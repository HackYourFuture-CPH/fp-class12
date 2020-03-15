import React from 'react';
import PropTypes from 'prop-types';

export default function SampleComponent({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>(this is a sample component)</p>
    </div>
  );
}

SampleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
