import React, { Component } from "react";
import { theme } from "../../config/theme";
import { Container } from "../commons/Container";
import Modal from "react-modal";
import { CartOverlay } from "./CartOverlay";
import { headerHeight } from "../../config/constants";

const customStyles = {
  content: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "red",
    width: "320px",
    padding: "0px",
  },
  overlay: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "blue",
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
            top: "0px",
            left: "65%",
          },
          overlay: {
            ...customStyles.overlay,
            position: "fixed",
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
