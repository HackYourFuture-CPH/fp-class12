import React from 'react';
import Modal from './Modal';
import { withKnobs, text } from '@storybook/addon-knobs';
import { boolean, changeBoolean } from '@storybook/addon-knobs/react';
import Popup from './ModalPopup';

export default { title: 'Modal', decorators: [withKnobs] };

export const ResponsiveModal = () => {
  const modalTitle = text('Title', 'Chooses the game mode');
  const optionA = text('Option A', 'with Timer');
  const optionB = text('Option B', 'without Timer');
  const buttonTitle = text('buttonTitle', 'Start Playing');

  const radiobox = boolean('With Timer', true);
  const radiobox2 = boolean('Without Timer', false);
  const onchangeradiobox = (isChecked) => changeBoolean('radio', isChecked);
  const onchangeradiobox2 = (isChecked) => changeBoolean('radio', isChecked);

  return (
    <Modal
      modalTitle={modalTitle}
      optionA={optionA}
      optionB={optionB}
      buttonTitle={buttonTitle}
      onchangeradiobox={onchangeradiobox}
      radiobox={radiobox}
      radiobox2={radiobox2}
      onchangeradiobox2={onchangeradiobox2}
    >
      <Popup />
    </Modal>
  );
};
