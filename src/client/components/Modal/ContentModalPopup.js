import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import ModalHeading from './ModalHeading';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function Popup(props) {
  const { modalTitle, buttonTitle, popupcontent, onClick, className } = props;
  return (
    <div className={className} id="modalbox">
      <div className="modal">
        <div className="modaltextarea">
          <ModalHeading modalTitle={modalTitle} />
          <p>{popupcontent}</p>
        </div>
        <SubmitButton onClick={onClick} buttonTitle={buttonTitle} />
      </div>
    </div>
  );
}

Popup.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  popupcontent: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
