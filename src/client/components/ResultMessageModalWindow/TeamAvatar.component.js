import React from 'react';
import Image from '../../assets/images/avatar3-ce.png';
import './ResultMessageModalWindow.styles.css';

export default function TeamAvatar() {
  return (
    <div className="teamAvatar-component">
      <img src={Image} alt="avatar3-ce" />
    </div>
  );
}
