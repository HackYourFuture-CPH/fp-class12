import React from 'react';
import PropTypes from 'prop-types';
import './SlideshowImageComponent.styles.css';
import avatarImages from '../../assets/data/ArrayOfImages';

export default function SlideshowImageComponent(props) {
  return (
    <img
      className="avatar_image"
      alt="Different avatars"
      src={avatarImages[props.currentImageIndex].image}
      key={avatarImages[props.currentImageIndex].imageId}
    />
  );
}

SlideshowImageComponent.propTypes = {
  currentImageIndex: PropTypes.number.isRequired,
};
