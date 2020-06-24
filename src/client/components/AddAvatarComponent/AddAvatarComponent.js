import React from 'react';
import PropTypes from 'prop-types';
import './AddAvatarComponent.styles.css';

export default function AddAvatarComponent({ title }) {
  return (
    <div className="add-avatar-component">
      <h2>{title}</h2>
      <p>(this is a sample component)</p>
    </div>
  );
}

AddAvatarComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
