import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './FormComponent.style.css';

export default function FormComponent({ inputLabel, value }) {
  return (
    <form className="form">
      <label className="form-label">{inputLabel}</label>
      <input className="form-input" type="text" value={value} />
      <ButtonComponent buttonTitle="Create Team" />
    </form>
  );
}

FormComponent.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
