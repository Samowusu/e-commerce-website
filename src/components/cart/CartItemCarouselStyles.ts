export const cartItemCarouselStyles = {
  mainContainer: {
    height: "100%",
    width: "350px",
    position: "relative",
  },

  button: (showButton: boolean) => {
    return {
      position: "absolute",
      bottom: "0",
      right: "10px",
      zIndex: "10",
      width: "20px",
      height: "20px",
      background: "black",
      display: showButton ? "none" : "",
    };
  },

  imageContainer: {
    height: "100%",
  },
};
