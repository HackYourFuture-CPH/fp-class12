import React from 'react';
import LeftArrowComponent from '../LeftArrowComponent/LeftArrowComponent';
import RightArrowComponent from '../RightArrowComponent/RightArrowComponent';
import SlideshowImageComponent from '../SlideshowImageComponent/SlideshowImageComponent';
import SliderDotsComponent from '../SliderDotsComponent/SliderDotsComponent';
import avatarImages from '../../../assets/data/ArrayOfImages';
import './SliderComponent.styles.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      isActive: false,
      totalImages: avatarImages.length,
    };
  }

  gotoPreviousSlide = () => {
    let index = this.state.currentImageIndex;
    const arrayOfImagesLength = this.state.totalImages;
    if (index < 1) {
      index = arrayOfImagesLength - 1;
    } else {
      index -= 1;
    }
    this.setState({
      currentImageIndex: index,
    });
  };

  gotoNextSlide = () => {
    let index = this.state.currentImageIndex;
    const arrayOfImagesLength = this.state.totalImages;
    if (index === arrayOfImagesLength - 1) {
      index = 0;
    } else {
      index += 1;
    }
    this.setState({
      currentImageIndex: index,
    });
  };

  handleDotsClick = (e, index) => {
    this.setState({
      currentImageIndex: index,
      isActive: true
    });
  };

  render() {
    return (
      <div className="slideshow_container">
        <div className="arrow_component">
          <LeftArrowComponent clickLeftArrow={this.gotoPreviousSlide} />
        </div>
        <div className="avatarImages_component">
          <SlideshowImageComponent
            currentImageIndex={this.state.currentImageIndex}
          />
        </div>
        <div className="magicdots_component">
          <SliderDotsComponent
            clickDots={this.handleDotsClick}
            noOfDots={this.state.totalImages}
            ChangeDotColour={this.state.isActive}
          />
        </div>
        <div className="arrow_component right">
          <RightArrowComponent clickRightArrow={this.gotoNextSlide} />
        </div>
      </div>
    );
  }
}

export default Slider;
