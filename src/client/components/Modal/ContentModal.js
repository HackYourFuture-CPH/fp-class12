import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import SimplePopup from './ContentModalPopup';

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
      <button type="button" onClick={toggleModal}>
        Open modal
      </button>
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
