import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import Popup from './ListModalPopup';
import SubmitButton from '../SubmitButton/SubmitButton';

const toggleModal = () => {
  document.querySelector('.modalbox').classList.toggle('showmodal');
};

export default function ListModal({
  modalTitle,
  ButtonTitle,
  optionA,
  optionB,
  radiobox,
  onchangeradiobox,
  radiobox2,
  onchangeradiobox2,
}) {
  return (
    <div className="modalcontainer">
      <SubmitButton onClick={toggleModal} ButtonTitle="Open modal" />
      <Popup
        modalTitle={modalTitle}
        optionA={optionA}
        optionB={optionB}
        ButtonTitle={ButtonTitle}
        onchangeradiobox={onchangeradiobox}
        radiobox={radiobox}
        radiobox2={radiobox2}
        onchangeradiobox2={onchangeradiobox2}
      />
    </div>
  );
}

ListModal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  optionA: PropTypes.string.isRequired,
  optionB: PropTypes.string.isRequired,
  ButtonTitle: PropTypes.string.isRequired,
  radiobox: PropTypes.string.isRequired,
  onchangeradiobox: PropTypes.string.isRequired,
  radiobox2: PropTypes.string.isRequired,
  onchangeradiobox2: PropTypes.string.isRequired,
};