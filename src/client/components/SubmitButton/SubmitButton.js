import React from 'react';
import './SubmitButton.css';
import PropTypes from 'prop-types';

export default function ButtonComponent({ buttonTitle, disabled, onClick }) {
  return (
    <button
      className="button-component"
      type="submit"
      disabled={disabled}
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
}
ButtonComponent.defaultProps = {
  buttonTitle: PropTypes.string.isRequired,
  disabled: false,
  onClick: PropTypes.func.isRequired,
};
