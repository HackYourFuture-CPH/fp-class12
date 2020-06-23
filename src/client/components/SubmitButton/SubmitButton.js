import React from 'react';
import './SubmitButton.css';
import PropTypes from 'prop-types';

export default function ButtonComponent({ ButtonTitle, onClick }) {
  return (
    <button className="button-component" type="button" onClick={onClick}>
      {ButtonTitle}
    </button>
  );
}
ButtonComponent.propTypes = {
  ButtonTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
