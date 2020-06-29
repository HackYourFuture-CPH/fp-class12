import React from 'react';
import './SubmitButton.css';
import PropTypes from 'prop-types';

export default function ButtonComponent({ ButtonTitle }) {
  return (
    <button className="button-component" type="submit">
      {ButtonTitle}
    </button>
  );
}
ButtonComponent.propTypes = {
  ButtonTitle: PropTypes.string.isRequired
};
