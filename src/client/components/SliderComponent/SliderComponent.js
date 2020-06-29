import React from 'react';
import ArrowsComponent from '../ArrowsComponent/ArrowsComponent';
import SlideshowImageComponent from '../SlideshowImageComponent/SlideshowImageComponent';
import SliderDotsComponent from '../SliderDotsComponent/SliderDotsComponent';
import avatarImages from '../../assets/data/ArrayOfImages';
import PropTypes from 'prop-types';
import './SliderComponent.styles.css';

function Slider({ currentImageIndex, setCurrentImageIndex }) {
  const totalImages = avatarImages.length;

  function slideImage(direction) {
    setCurrentImageIndex(direction(currentImageIndex));
  }

  const left = (activeImageIndex) => {
    return activeImageIndex < 1 ? totalImages - 1 : activeImageIndex - 1;
  };

  const right = (activeImageIndex) => {
    return activeImageIndex === totalImages - 1 ? 0 : activeImageIndex + 1;
  };

  const handleDotsClick = (event, index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slideshow_container">
      <div className="arrow_component">
        <ArrowsComponent
          clickLeftArrow={() => slideImage(left)}
          clickRightArrow={() => slideImage(right)}
        />
      </div>
      <div className="avatarImages_component">
        <SlideshowImageComponent currentImageIndex={currentImageIndex} />
      </div>
      <div className="magicdots_component">
        <SliderDotsComponent
          clickDots={handleDotsClick}
          noOfDots={totalImages}
          activeImageIndex={currentImageIndex}
        />
      </div>
    </div>
  );
}

Slider.propTypes = {
  currentImageIndex: PropTypes.number.isRequired,
  setCurrentImageIndex: PropTypes.func.isRequired,
};

export default Slider;
