import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../SubmitButton/SubmitButton';
import './SingleInputFormComponent.style.css';

export default function SingleInputFormComponent({
  inputLabel,
  value,
  ButtonTitle,
  onSubmit,
  onChange
}) {
  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      <label className="form-label">{inputLabel}</label>
      <input
        className="form-input m-top m-bot"
        type="text"
        onChange={(e) => onChange(e)}
        placeholder={value}
      />
      <ButtonComponent ButtonTitle={ButtonTitle} />
    </form>
  );
}

SingleInputFormComponent.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  ButtonTitle: PropTypes.string.isRequired,
};
