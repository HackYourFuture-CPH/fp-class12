import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import SimplePopup from './ContentModalPopup';
import SubmitButton from '../SubmitButton/SubmitButton';

// TODO: This is not the "React way", but will do for now.
const toggleModal = () => {
  document.querySelector('.modalbox').classList.toggle('showmodal');
};

export default function ModalResponsive({
  modalTitle,
  buttonTitle,
  popupcontent,
}) {
  return (
    <div className="modalcontainer">
      <SubmitButton onClick={toggleModal} buttonTitle="Open modal" />
      <SimplePopup
        modalTitle={modalTitle}
        buttonTitle={buttonTitle}
        popupcontent={popupcontent}
      />
    </div>
  );
}

ModalResponsive.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  popupcontent: PropTypes.string.isRequired,
};
