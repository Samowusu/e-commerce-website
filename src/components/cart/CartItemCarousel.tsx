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
      <Container
        border
        borderColor="blue"
        height="100%"
        width="350px"
        position="relative"
      >
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
              zIndex="100"
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
              zIndex="100"
            >
              <PrevIcon />
            </Button>
          )}
          infiniteLoop
        >
          {this.props.images.map((image, index) => (
            <Container key={index}>
              <img src={image} />
            </Container>
          ))}
        </Carousel>
      </Container>
    );
  }
}
