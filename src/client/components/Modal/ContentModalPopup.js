import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import ModalHeading from './ModalHeading';
import SubmitButton from '../SubmitButton/SubmitButton';

// TODO: This is not the "React way", but will do for now.
const onCloseModal = () => {
  document.getElementById('modalbox').className = 'modalbox';
};

export default function Popup(props) {
  const { modalTitle, buttonTitle, popupcontent } = props;
  return (
    <div className="modalbox" id="modalbox">
      <div className="modal">
        <div className="modaltextarea">
          <ModalHeading modalTitle={modalTitle} />
          <p>{popupcontent}</p>
        </div>
        <SubmitButton onClick={onCloseModal} buttonTitle={buttonTitle} />
      </div>
    </div>
  );
}

Popup.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  popupcontent: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};
