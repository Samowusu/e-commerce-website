import { Component } from "react";
import { theme } from "../../config/theme";
import Modal from "react-modal";
import CartOverlay from "./CartOverlay";
import { headerHeight } from "../../config/constants";

const customStyles = {
  content: {
    maxWidth: "350px",
    minWidth: "300px",
    maxHeight: "530px",
    padding: "0px",
    border: "none",
    borderRadius: "0px",
    top: "0px",
    right: "10%",
    left: "auto",
    zIndex: "500",
  },
  overlay: {
    background: `${theme.colors.modalBackground}`,
    zIndex: "500",

    top: `${headerHeight}`,
  },
};

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
            ...customStyles.content,
          },
          overlay: {
            ...customStyles.overlay,
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
