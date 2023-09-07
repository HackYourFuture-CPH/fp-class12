import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import ModalHeading from './ModalHeading';
import ListModalContent from './ListModalContent';
import SubmitButton from '../SubmitButton/SubmitButton';

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
    className,
    onClick,
  } = props;
  return (
    <div className={className} id="modalbox">
      <div className="modal">
        <div className="modaltextarea">
          <ModalHeading modalTitle={modalTitle} />
          <ListModalContent
            optionA={optionA}
            optionB={optionB}
            radiobox={radiobox}
            onchangeradiobox={onchangeradiobox}
            radiobox2={radiobox2}
            onchangeradiobox2={onchangeradiobox2}
            onClick={onClick}
          />
        </div>
        <SubmitButton onClick={onClick} buttonTitle={buttonTitle} />
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
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
