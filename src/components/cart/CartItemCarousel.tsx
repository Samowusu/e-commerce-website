import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container } from "../commons/Container";
import shirt from "../../assets/images/ProductD.png";
import { Button } from "../commons/Button";
import { NextIcon } from "../../assets/svgs/NextIcon";
import { PrevIcon } from "../../assets/svgs/PrevIcon";
import { cartItemCarouselStyles } from "./CartItemCarouselStyles";

interface Props {
  images: string[];
}
export class CartItemCarousel extends Component<Props> {
  static defaultProps: Props = {
    images: [`${shirt}`],
  };
  render() {
    return (
      <Container style={cartItemCarouselStyles.mainContainer}>
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
              onClick={clickHandler}
              style={cartItemCarouselStyles.button(
                this.props.images.length < 2
              )}
            >
              <NextIcon />
            </Button>
          )}
          renderArrowPrev={(clickHandler) => (
            <Button
              onClick={clickHandler}
              style={{
                ...cartItemCarouselStyles.button(this.props.images.length < 2),
                right: "40px",
              }}
            >
              <PrevIcon />
            </Button>
          )}
          infiniteLoop
        >
          {this.props.images.map((image, index) => (
            <Container
              key={index}
              style={cartItemCarouselStyles.imageContainer}
            >
              <img src={image} alt="the product" />
            </Container>
          ))}
        </Carousel>
      </Container>
    );
  }
}
