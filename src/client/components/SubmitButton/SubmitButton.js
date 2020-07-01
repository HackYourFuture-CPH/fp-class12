import React from 'react';
import './SubmitButton.css';
import PropTypes from 'prop-types';

export default function ButtonComponent({ buttonTitle, disabled }) {
  return (
    <button className="button-component" type="submit" disabled={disabled}>
      {buttonTitle}
    </button>
  );
}
ButtonComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
ButtonComponent.defaultProps = {
  disabled: false,
};
