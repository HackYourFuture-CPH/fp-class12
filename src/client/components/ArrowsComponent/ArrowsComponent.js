import React from 'react';
import PropTypes from 'prop-types';
import './ArrowsComponent.styles.css';

export default function ArrowsComponent({ clickLeftArrow, clickRightArrow }) {
  return (
    <>
      <button
        type="button"
        onClick={clickLeftArrow}
        className="arrow arrowLeft"
      >
        &#8592;
      </button>
      <button
        type="button"
        onClick={clickRightArrow}
        className="arrow arrowRight"
      >
        &#8594;
      </button>
    </>
  );
}

ArrowsComponent.propTypes = {
  clickLeftArrow: PropTypes.func.isRequired,
  clickRightArrow: PropTypes.func.isRequired,
};
