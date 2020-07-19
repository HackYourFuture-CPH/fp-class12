import React, { useState } from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';
import ListModalPopup from './ListModalPopup';
// import SubmitButton from '../SubmitButton/SubmitButton';

export default function ListModal({
  modalTitle,
  buttonTitle,
  optionA,
  optionB,
  radiobox,
  onchangeradiobox,
  radiobox2,
  onchangeradiobox2,
}) {
  const [modalShown, toggleModalShown] = useState(false);
  return (
    <div className="modalcontainer">
      {/* <SubmitButton
        onClick={() => toggleModalShown(!modalShown)}
        buttonTitle="Open modal"
      /> */}
      {/* To use this modal just follow the code in SubmitButton. It is commented because at the time of importing it will come along a submit button which is not required. */}
      <ListModalPopup
        modalTitle={modalTitle}
        optionA={optionA}
        optionB={optionB}
        buttonTitle={buttonTitle}
        onchangeradiobox={onchangeradiobox}
        radiobox={radiobox}
        radiobox2={radiobox2}
        onchangeradiobox2={onchangeradiobox2}
        onClick={() => toggleModalShown(!modalShown)}
        className={`modalbox ${modalShown ? 'showmodal' : 'hidemodal'}`}
      />
    </div>
  );
}

ListModal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  optionA: PropTypes.string.isRequired,
  optionB: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  radiobox: PropTypes.string.isRequired,
  onchangeradiobox: PropTypes.string.isRequired,
  radiobox2: PropTypes.string.isRequired,
  onchangeradiobox2: PropTypes.string.isRequired,
};
