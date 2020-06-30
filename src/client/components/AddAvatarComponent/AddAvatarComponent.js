import React from 'react';
import './AddAvatarComponent.styles.css';

import avatarIcon from '../../assets/images/avatars/anonimos-avatar.png';
import addIcon from '../../assets/images/icons/plus-icon.svg';

export default function AddAvatarComponent() {
  return (
    <div className="container">
      <img
        src={avatarIcon}
        alt="silhouette of a person"
        className="avatar-icon"
      />
      <img src={addIcon} alt="plus symbol" className="add-icon" />
    </div>
  );
}
