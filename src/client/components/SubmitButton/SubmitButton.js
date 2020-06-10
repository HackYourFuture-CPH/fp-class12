import React from 'react';
import './SubmitButton.css';
import PropTypes from 'prop-types';

export default function ButtonComponent({ ButtonTitle }) {
  return (
    <button className="button-component" type="button">
      {ButtonTitle}
    </button>
  );
}
ButtonComponent.propTypes = {
  ButtonTitle: PropTypes.string.isRequired,
};
