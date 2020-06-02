import React from 'react';
import PropTypes from 'prop-types';

export default function TeamAvatar({ avatar }) {
  if (!avatar) {
    // not sure if the *(if statement) should be like this,
    // but i write it in case there's bug in the prop
    return (
      <div className="avatar-failed-div">
        <p>avatar URL missing</p>
      </div>
    );
  }

  return (
    <div className="avatar-div">
      <img className="avatar" src={avatar} alt="avatar-img" />
    </div>
  );
}

TeamAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};
