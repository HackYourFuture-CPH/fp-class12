import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import Popup from './ModalPopup';

const toggleModal = () => {
  document.querySelector('.modalbox').classList.toggle('showmodal');
};

export default function ModalResponsive({
  modalTitle,
  buttonTitle,
  optionA,
  optionB,
  radiobox,
  onchangeradiobox,
  radiobox2,
  onchangeradiobox2,
}) {
  return (
    <div className="modalcontainer">
      <button type="button" onClick={toggleModal}>
        Open modal
      </button>

      <Popup
        modalTitle={modalTitle}
        optionA={optionA}
        optionB={optionB}
        buttonTitle={buttonTitle}
        onchangeradiobox={onchangeradiobox}
        radiobox={radiobox}
        radiobox2={radiobox2}
        onchangeradiobox2={onchangeradiobox2}
      />
    </div>
  );
}

ModalResponsive.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  optionA: PropTypes.string.isRequired,
  optionB: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  radiobox: PropTypes.string.isRequired,
  onchangeradiobox: PropTypes.string.isRequired,
  radiobox2: PropTypes.string.isRequired,
  onchangeradiobox2: PropTypes.string.isRequired,
};
