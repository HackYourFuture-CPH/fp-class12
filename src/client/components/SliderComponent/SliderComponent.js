import React from 'react';
import ArrowsComponent from '../ArrowsComponent/ArrowsComponent';
import SlideshowImageComponent from '../SlideshowImageComponent/SlideshowImageComponent';
import SliderDotsComponent from '../SliderDotsComponent/SliderDotsComponent';
import avatarImages from '../../assets/data/ArrayOfImages';
import './SliderComponent.styles.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
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
    });
  };

  render() {
    return (
      <div className="slideshow_container">
        <div className="arrow_component">
          <ArrowsComponent clickLeftArrow={this.gotoPreviousSlide} clickRightArrow={this.gotoNextSlide} />
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
            activeImageIndex={this.state.currentImageIndex}
          />
        </div>
      </div>
    );
  }
}

export default Slider;
