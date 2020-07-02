import React from 'react';
import Modal from './ContentModal';
import { withKnobs, text } from '@storybook/addon-knobs';
import ContentPopup from './ContentModalPopup';

export default { title: 'Modal', decorators: [withKnobs] };

export const ContentModal = () => {
  const modalTitle = text('Title', 'Chooses the game mode');
  const buttonTitle = text('buttonTitle', 'Start Playing');
  const popupcontent = text('popupcontent', 'Start writing');

  return (
    <Modal
      modalTitle={modalTitle}
      buttonTitle={buttonTitle}
      popupcontent={popupcontent}
    >
      <ContentPopup />
    </Modal>
  );
};
