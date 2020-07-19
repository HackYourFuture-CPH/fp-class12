import React, { useState } from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import ContentModal from './ContentModalPopup';
// import SubmitButton from '../SubmitButton/SubmitButton';

export default function ModalResponsive({
  modalTitle,
  buttonTitle,
  popupcontent,
}) {
  const [isModalOpen, toggleModal] = useState(false);
  return (
    <div className="modalcontainer">
      {/* <SubmitButton
        onClick={() => toggleModal(!isModalOpen)}
        buttonTitle="Open modal"
      /> */}
      {/* To use this modal just follow the code in SubmitButton. It is commented because at the time of importing it will come along a submit button which is not required. */}
      <ContentModal
        modalTitle={modalTitle}
        buttonTitle={buttonTitle}
        popupcontent={popupcontent}
        onClick={() => toggleModal(!isModalOpen)}
        className={`modalbox ${isModalOpen ? 'showmodal' : 'hidemodal'}`}
      />
    </div>
  );
}

ModalResponsive.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  popupcontent: PropTypes.string.isRequired,
};
