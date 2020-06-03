import React from 'react';
import avatar from '../../assets/images/avatars/guy-avatar-circle.png';
import './ResultMessageModalWindow.styles.css';

export default function TeamAvatar() {
  return (
    <div className="teamAvatar-component">
      <img src={avatar} alt="guy-avatar-circle.png" />
    </div>
  );
}
