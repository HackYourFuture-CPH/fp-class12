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
  ButtonTitle,
  popupcontent,
}) {
  return (
    <div className="modalcontainer">
      <SubmitButton onClick={toggleModal} ButtonTitle="Open modal" />
      <SimplePopup
        modalTitle={modalTitle}
        ButtonTitle={ButtonTitle}
        popupcontent={popupcontent}
      />
    </div>
  );
}

ModalResponsive.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  ButtonTitle: PropTypes.string.isRequired,
  popupcontent: PropTypes.string.isRequired,
};
