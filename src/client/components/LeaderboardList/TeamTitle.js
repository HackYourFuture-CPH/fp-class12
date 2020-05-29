import React from 'react';
import PropTypes from 'prop-types';

export default function TeamTitle({ title }) {
  if (!title) {
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
