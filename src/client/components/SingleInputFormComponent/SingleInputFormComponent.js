import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './SingleInputFormComponent.style.css';

export default function SingleInputFormComponent({ inputLabel, value, title }) {
  return (
    <form className="form">
      <label className="form-label">{inputLabel}</label>
      <input className="form-input" type="placeholder" value={value} />
      <ButtonComponent title={title} />
    </form>
  );
}

SingleInputFormComponent.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
