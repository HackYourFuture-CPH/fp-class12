import React from 'react';
import '../../../../node_modules/react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default class ModalResponsive extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="bodycontainer">
        <button type="button" onClick={this.onOpenModal}>
          Open modal
        </button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}
