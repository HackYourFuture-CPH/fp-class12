import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../SubmitButton/SubmitButton';
import './SingleInputFormComponent.style.css';

export default function SingleInputFormComponent({
  inputLabel,
  value,
  ButtonTitle,
  onSubmit
}) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form-label">{inputLabel}</label>
      <input
        className="form-input m-top m-bot"
        type="textbox"
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
