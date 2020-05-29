import React from 'react';
import PropTypes from 'prop-types';

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

TeamAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};
