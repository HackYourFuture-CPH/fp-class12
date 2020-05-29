import React from 'react';

export default function TeamAvatar({ avatar }) {
  if (!avatar) {
    return (
      <div className="avatar-div">
        <div>avatar URL missing</div>
      </div>
    );
  }

  return (
    <div className="avatar-div">
      <img className="avatar" src={avatar} alt="avatar-img" />
    </div>
  );
}
