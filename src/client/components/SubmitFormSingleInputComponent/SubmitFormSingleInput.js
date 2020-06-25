import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../SubmitButton/SubmitButton';
import './SubmitFormSingleInput.style.css';
import Popup from '../Modal/ContentModal.js';

const toggleModal = () => {
  document.querySelector('.modalbox').classList.toggle('showmodal');
};

export default function SingleInputFormComponent({
  inputLabel,
  value,
  ButtonTitle,
}) {
  return (
    <form className="form">
      <label className="form-label">{inputLabel}</label>
      <input
        className="form-input m-top m-bot"
        type="textbox"
        placeholder={value}
      />
      <ButtonComponent
        ButtonTitle={ButtonTitle}
        onClick={() => {
          const inputvalue = document.getElementsByName('.form-input').value;
          if (!inputvalue) {
            toggleModal();
          }
        }}
      />
      <Popup
        modalTitle="Error"
        buttonTitle="TryAgain"
        popupcontent="You need to insert the game code to play"
      />
    </form>
  );
}

SingleInputFormComponent.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  ButtonTitle: PropTypes.string.isRequired,
};
