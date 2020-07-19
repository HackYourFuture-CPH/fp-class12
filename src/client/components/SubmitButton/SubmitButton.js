import React from 'react';
import './SubmitButton.css';
import PropTypes from 'prop-types';

export default function ButtonComponent({ buttonTitle, disabled, onClick }) {
  return (
    <button
      className="button-component"
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      {buttonTitle}
    </button>
  );
}
ButtonComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
ButtonComponent.defaultProps = {
  disabled: false,
};
