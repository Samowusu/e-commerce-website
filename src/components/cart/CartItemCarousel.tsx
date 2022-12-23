import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container } from "../commons/Container";
import shirt from "../../assets/images/ProductD.png";
import { Button } from "../commons/Button";
import { NextIcon } from "../../assets/svgs/NextIcon";
import { PrevIcon } from "../../assets/svgs/PrevIcon";

interface Props {
  images: string[];
}
export class CartItemCarousel extends Component<Props> {
  static defaultProps: Props = {
    images: [`${shirt}`],
  };
  render() {
    return (
      <Container height="100%" width="350px" position="relative">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          width="100%"
          emulateTouch={true}
          showStatus={false}
          swipeable={true}
          useKeyboardArrows={true}
          renderArrowNext={(clickHandler) => (
            <Button
              width="20px"
              height="20px"
              bg="black"
              onClick={clickHandler}
              position="absolute"
              bottom="0"
              right="10px"
              zIndex="10"
              display={this.props.images.length < 2 ? "none" : ""}
            >
              <NextIcon />
            </Button>
          )}
          renderArrowPrev={(clickHandler) => (
            <Button
              width="20px"
              height="20px"
              bg="black"
              onClick={clickHandler}
              position="absolute"
              bottom="0"
              right="40px"
              zIndex="10"
              display={this.props.images.length < 2 ? "none" : ""}
            >
              <PrevIcon />
            </Button>
          )}
          infiniteLoop
        >
          {this.props.images.map((image, index) => (
            <Container key={index} height="100%">
              <img
                src={image}
                alt="the product"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Container>
          ))}
        </Carousel>
      </Container>
    );
  }
}
