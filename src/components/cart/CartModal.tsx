import { Component } from "react";
import { cartModalStyles } from "./CartModalStyles";
import Modal from "react-modal";
import CartOverlay from "./CartOverlay";

Modal.setAppElement("#root");

interface Props {
  modalIsOpen?: boolean;
  onCloseModal?: () => void;
}

export class CartModal extends Component<Props> {
  static defaultProps: Props = {
    modalIsOpen: false,
    onCloseModal: () => console.log("cart Modal is closed"),
  };
  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen ?? false}
        onRequestClose={this.props.onCloseModal}
        style={{
          content: {
            ...cartModalStyles.content,
          },
          overlay: {
            ...cartModalStyles.overlay,
          },
        }}
        contentLabel="Cart Modal"
      >
        <CartOverlay
          onCheckout={this.props.onCloseModal}
          onCloseModal={this.props.onCloseModal}
        />
      </Modal>
    );
  }
}
