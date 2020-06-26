import React from 'react';
import './SubmitButton.css';
import PropTypes from 'prop-types';

export default function ButtonComponent({ ButtonTitle, onClick }) {
  // onChange
  return (
    <button
      className="button-component"
      type="button"
      onClick={onClick}
      // onChange={onChange}
    >
      {ButtonTitle}
    </button>
  );
}
ButtonComponent.propTypes = {
  ButtonTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
};
