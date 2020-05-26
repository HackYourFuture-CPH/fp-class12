import React from 'react';

export default function TeamAvatar({ avatar }) {
  return (
    <div className="avatar-div">
      <img className="avatar" src={avatar} alt="avatar-img" />
    </div>
  );
}
