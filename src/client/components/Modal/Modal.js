import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';

const onCloseModal = () => {
  document.getElementById('modalbox').className = 'modalbox';
};

const toggleModal = () => {
  document.querySelector('.modalbox').classList.toggle('showmodal');
};

export default function ModalResponsive({
  modalTitle,
  optionA,
  optionB,
  buttonTitle,
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
      <div className="modalbox" id="modalbox" onClose={onCloseModal}>
        <div className="modal">
          <div className="modaltextarea">
            <h3>{modalTitle}</h3>
            <ul>
              <li>
                <input
                  type="radio"
                  name="timer"
                  onChange={onchangeradiobox}
                  checked={radiobox}
                />
                {optionA}
              </li>
              <li>
                <input
                  type="radio"
                  name="timer"
                  onChange={onchangeradiobox2}
                  checked={radiobox2}
                />
                {optionB}
              </li>
            </ul>
          </div>
          <button
            type="button"
            onClick={onCloseModal}
            className="button-component"
          >
            {buttonTitle}
          </button>
        </div>
      </div>
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
