import React, { Component } from "react";
import { theme } from "../../config/theme";
import { Container } from "../commons/Container";
import Modal from "react-modal";
import CartOverlay from "./CartOverlay";
import { headerHeight } from "../../config/constants";

const customStyles = {
  content: {
    maxWidth: "350px",
    minWidth: "300px",
    padding: "0px",
  },
  overlay: {
    background: `${theme.colors.modalBackground}`,
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
            position: "absolute",
            zIndex: "500",
            top: "0px",
            left: "65%",
          },
          overlay: {
            ...customStyles.overlay,
            position: "fixed",
            zIndex: "500",

            top: `${headerHeight}`,
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
/* ===== Scrollbar CSS ===== */
/* Firefox */
//   * {
//   scrollbar-width: auto;
//   scrollbar-color: #d6cfd8 #ffffff;
// }

// /* Chrome, Edge, and Safari */
// *::-webkit-scrollbar {
//   width: 7px;
// }

// *::-webkit-scrollbar-track {
//   background: #ffffff;
// }

// *::-webkit-scrollbar-thumb {
//   background-color: #d6cfd8;
//   border-radius: 8px;
//   border: 3px none #ffffff;
// }
