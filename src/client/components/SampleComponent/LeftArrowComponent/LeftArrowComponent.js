import React from 'react';
import PropTypes from 'prop-types';
import './LeftArrowComponent.styles.css';

export default function LeftArrowComponent(props) {
  return (
    <svg
      onClick={props.clickLeftArrow}
      className="bi bi-arrow-left-circle"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        fillRule="evenodd"
        d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
      />
      <path
        fillRule="evenodd"
        d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
      />
    </svg>
  );
}

LeftArrowComponent.propTypes = {
  clickLeftArrow: PropTypes.func.isRequired,
};
