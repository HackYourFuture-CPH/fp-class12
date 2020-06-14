import React from 'react';
import PropTypes from 'prop-types';
import './NavigationalButtonComponent.styles.css';

// I used anchor tag to create links over react-router Link component
// It's because we don't have paths and endpoints aren't created yet.

export default function NavigationalButtonComponent({
  content,
  imgSrc,
  alt,
  href,
}) {
  return (
    <a className="navigational-button-component" href={href}>
      <img src={imgSrc} alt={alt} className="icon" />
      <span className="label">{content}</span>
    </a>
  );
}

NavigationalButtonComponent.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
