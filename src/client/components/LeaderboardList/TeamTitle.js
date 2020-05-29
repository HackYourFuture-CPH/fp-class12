import React from 'react';
import PropTypes from 'prop-types';

export default function TeamTitle({ title }) {
  if (!title) {
    // i'm not sure if the *(if statement) should be like this,
    // but i write it in case there's bug in the prop
    return (
      <div className="title-div">
        <div>title is missing</div>
      </div>
    );
  }

  return (
    <div className="title-div">
      <h1 className="title">{title}</h1>
    </div>
  );
}

TeamTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
