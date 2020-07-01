import React from 'react';
import './SubmitButton.css';
import PropTypes from 'prop-types';

export default function ButtonComponent({ ButtonTitle, disabled }) {
  return (
    <button className="button-component" type="submit" disabled={disabled}>
      {ButtonTitle}
    </button>
  );
}
ButtonComponent.propTypes = {
  ButtonTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
ButtonComponent.defaultProps = {
  disabled: false,
};
