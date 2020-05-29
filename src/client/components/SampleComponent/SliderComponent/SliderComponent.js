import React from 'react';
import LeftArrowComponent from '../LeftArrowComponent/LeftArrowComponent';
import RightArrowComponent from '../RightArrowComponent/RightArrowComponent';
import SlideshowImageComponent from '../SlideshowImageComponent/SlideshowImageComponent';
import avatarImages from '../../../assets/data/ArrayOfImages';

class Slider extends React.Component {

  state = {
    currentImageIndex: 0,
    totalImages: avatarImages.length
  };

  gotoPreviousSlide() {
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
  }

  gotoNextSlide() {
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
  }

  render() {
    return (
      <div className="slider">
        <div className="left_arrow">
          <LeftArrowComponent clickLeftArrow={this.gotoPreviousSlide} />
        </div>
        <div className="centre_image">
          <SlideshowImageComponent currentImageIndex={this.state.currentImageIndex} />
        </div>
        <div className="right_arrow">
          <RightArrowComponent clickRightArrow={this.gotoNextSlide} />
        </div>
      </div>
    );
  }
}

export default Slider;