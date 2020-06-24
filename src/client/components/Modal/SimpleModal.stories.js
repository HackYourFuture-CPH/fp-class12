import React from 'react';
import Modal from './SimpleModal';
import { withKnobs, text } from '@storybook/addon-knobs';
import SimplePopup from './SimpleModalPopup';

export default { title: 'Modal', decorators: [withKnobs] };

export const SimpleModal = () => {
  const modalTitle = text('Title', 'Chooses the game mode');
  const buttonTitle = text('buttonTitle', 'Start Playing');
  const popupcontent = text('popupcontent', 'Start writing');

  return (
    <Modal
      modalTitle={modalTitle}
      buttonTitle={buttonTitle}
      popupcontent={popupcontent}
    >
      <SimplePopup />
    </Modal>
  );
};
