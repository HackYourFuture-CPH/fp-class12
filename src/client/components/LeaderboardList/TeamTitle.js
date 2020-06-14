import React from 'react';
import PropTypes from 'prop-types';

export default function TeamTitle({ title }) {
  if (!title) {
    // i'm not sure if the *(if statement) should be like this,
    // but i write it in case there's bug in the prop
    return (
      <div className="title-failed-div">
        <p>title is missing</p>
      </div>
    );
  }

  return (
    <div className="title-div">
      <h3 className="title">{title}</h3>
    </div>
  );
}

TeamTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
