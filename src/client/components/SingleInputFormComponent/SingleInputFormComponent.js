import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../SubmitButton/SubmitButton';
import './SingleInputFormComponent.style.css';

export default function SingleInputFormComponent({
  inputLabel,
  value,
  buttonTitle,
  placeholder,
  onSubmit,
  onChange,
}) {
  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      <label className="form-label">{inputLabel}</label>
      <input
        className="form-input m-top m-bot"
        type="text"
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        value={value}
      />
      <ButtonComponent buttonTitle={buttonTitle} disabled={!value} />
    </form>
  );
}

SingleInputFormComponent.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

SingleInputFormComponent.defaultProps = {
  placeholder: '',
};
