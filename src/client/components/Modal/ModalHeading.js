import React from 'react';
import PropTypes from 'prop-types';
import './Modal.styles.css';

export default function ModalHeading({ modalTitle }) {
  return <h3>{modalTitle}</h3>;
}

ModalHeading.propTypes = {
  modalTitle: PropTypes.string.isRequired,
};
