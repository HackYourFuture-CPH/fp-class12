import React from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.styles.css';

export default function ButtonComponent({ title }) {
  return (
    <div>
      <button className="button-component" type="button">
        {title}
      </button>
    </div>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
