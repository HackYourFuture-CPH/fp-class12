import React from 'react';
import './Modal.styles.css';
import PropTypes from 'prop-types';

// const onCloseModal = () => {
//   document.getElementById('modalbox').className = 'modalbox';
// };

// const toggleModal = () => {
//   document.querySelector('.modalbox').classList.toggle('showmodal');
// };

export default function popup({
  optionA,
  optionB,
  radiobox,
  onchangeradiobox,
  radiobox2,
  onchangeradiobox2,
}) {
  return (
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
  );
}

popup.propTypes = {
  // modalTitle: PropTypes.string.isRequired,
  optionA: PropTypes.string.isRequired,
  optionB: PropTypes.string.isRequired,
  // buttonTitle: PropTypes.string.isRequired,
  radiobox: PropTypes.string.isRequired,
  onchangeradiobox: PropTypes.string.isRequired,
  radiobox2: PropTypes.string.isRequired,
  onchangeradiobox2: PropTypes.string.isRequired,
};
