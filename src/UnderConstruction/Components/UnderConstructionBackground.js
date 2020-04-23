import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "../index.css";

const Styles = {
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    right: 0,
    top:0,
    bottom: 0,
    zIndex: -1,
  },
};

const slideStyle = (imageUrl) => {
  return {
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${imageUrl})`,
  };
};

const images = [
  "images/background1.jpg",
  "images/background2.jpg",
  "images/background3.png",
];

class UnderConstructionBackground extends React.Component {
  render() {
    const items = images.map(imagePath => (
      <Carousel.Item style={slideStyle(imagePath)} />
    ));

    return (
      <Carousel
        style={Styles.container}
        controls={false}
        indicators={false}
        pause={false}
        inteval={3000}>
        {items}
      </Carousel>
    );
  }
}

export default UnderConstructionBackground;
