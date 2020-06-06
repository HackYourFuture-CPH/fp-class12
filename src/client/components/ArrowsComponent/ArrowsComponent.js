import React from 'react';
import PropTypes from 'prop-types';
import './ArrowsComponent.styles.css';

export default function ArrowsComponent(props) {
  return (
    <fragment>
      <button
        type="button"
        onClick={props.clickLeftArrow}
        className="arrow arrowLeft"
      >
        &#8592;
      </button>
      <button
        type="button"
        onClick={props.clickRightArrow}
        className="arrow arrowRight"
      >
        &#8594;
      </button>
    </fragment>
  );
}

ArrowsComponent.propTypes = {
  clickLeftArrow: PropTypes.func.isRequired,
  clickRightArrow: PropTypes.func.isRequired,
};
