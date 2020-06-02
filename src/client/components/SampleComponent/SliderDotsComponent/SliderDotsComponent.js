import React from 'react';
import PropTypes from 'prop-types';
import './SliderDotsComponent.styles.css';

export default function SliderDotsComponent(props) {
  return (
    <div className="dots_component">
      {[...Array(props.noOfDots)].map((x, i) => (
        <svg
          onClick={(e) => props.clickDots(e, i)}
          className="circle bi-circle-fill"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {props.ChangeDotColour ? <circle cx="4" cy="4" r="4" fill="red"/> : <circle cx="4" cy="4" r="4" fill="gray"/>}
        </svg>
      ))}
    </div>
  );
}

SliderDotsComponent.propTypes = {
  noOfDots: PropTypes.number.isRequired,
  clickDots: PropTypes.func.isRequired,
  ChangeDotColour: PropTypes.bool.isRequired
};
