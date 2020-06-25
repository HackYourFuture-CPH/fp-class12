import React, { useState } from 'react';
import HeaderTitle from '../../components/Title/Title';
import FooterComponent from '../../components/FooterComponent/FooterComponent.js';
import ButtonComponent from '../../components/SubmitButton/SubmitButton.js';
import SliderComponent from '../../components/SliderComponent/SliderComponent.js';
import PropTypes from 'prop-types';
import './PickAvatarPage.styles.css';
import '../../App.css';

export const PickAvatarPage = ({ onAvatarChosen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bodycontainer">
      <HeaderTitle title="Pick an Avatar" />
      <div className="bodywrapper">
        <div className="avatar-choosing-text">
          <p>What is you favorite personality?</p>
          <p>Choose one the four avatars for your Team.</p>
        </div>
        <div className="silder-container">
          <SliderComponent
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
        <ButtonComponent
          ButtonTitle="Choose"
          onClick={() => onAvatarChosen(currentImageIndex)}
        />
      </div>
      <FooterComponent />
    </div>
  );
};

PickAvatarPage.propTypes = {
  onAvatarChosen: PropTypes.func.isRequired,
};
