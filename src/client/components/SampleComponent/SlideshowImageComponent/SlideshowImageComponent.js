import React from 'react';
import './SlideshowImageComponent.styles.css';
import ArrayOfImages from '../../../assets/data/ArrayOfImages';

export default function SlideshowImageComponent() {
    return (
      <div ClassName="image_component">
        {ArrayOfImages.map((avatar) => (
          <img className= "avatar_image" alt="Different avatars" src={avatar.image} />
        ))}
      </div>
    );
}