import React, { Component } from "react";
import { theme } from "../../config/theme";
import { Container } from "./Container";
import Modal from "react-modal";
import { CartOverlay } from "../cart/CartOverlay";

const customStyles = {
  content: {
    top: "10px",
    left: "50%",
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

interface States {
  modalIsOpen: boolean;
}
interface Props {}

export class CustomModal extends Component<Props, States> {
  state: Readonly<States> = {
    modalIsOpen: false,
  };
  openModal = () => {
    this.setState((prevState) => {
      return {
        modalIsOpen: !prevState.modalIsOpen,
      };
    });
  };

  closeModal = () => {
    console.log("checking out and closing cartModal");
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <Container border>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Cart Modal"
        >
          <CartOverlay onCheckout={this.closeModal} />
        </Modal>
      </Container>
    );
  }
}
