import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import ModalHeading from './ModalHeading';
import ModalContent from './ModalContent';
// import Button from '../ButtonComponent/Button';

const onCloseModal = () => {
  document.getElementById('modalbox').className = 'modalbox';
};

export default function Popup(props) {
  const {
    modalTitle,
    buttonTitle,
    optionA,
    optionB,
    radiobox,
    onchangeradiobox,
    radiobox2,
    onchangeradiobox2,
  } = props;
  return (
    <div className="modalbox" id="modalbox">
      <div className="modal">
        <div className="modaltextarea">
          <ModalHeading modalTitle={modalTitle} />
          <ModalContent
            optionA={optionA}
            optionB={optionB}
            radiobox={radiobox}
            onchangeradiobox={onchangeradiobox}
            radiobox2={radiobox2}
            onchangeradiobox2={onchangeradiobox2}
          />
        </div>
        <button
          type="button"
          onClick={onCloseModal}
          className="button-component"
        >
          {buttonTitle}
        </button>
        {/* <Button /> */}
      </div>
    </div>
  );
}

Popup.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  optionA: PropTypes.string.isRequired,
  optionB: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  radiobox: PropTypes.string.isRequired,
  onchangeradiobox: PropTypes.string.isRequired,
  radiobox2: PropTypes.string.isRequired,
  onchangeradiobox2: PropTypes.string.isRequired,
};
