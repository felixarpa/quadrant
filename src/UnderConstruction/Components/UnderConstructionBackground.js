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
  "images/zmramis/04.jpg",
  "images/zmramis/10.jpg",
  "images/zmramis/17.jpg",
  "images/ballobar/20191107_170042.jpg",
  "images/ballobar/20191107_170457.jpg",
  "images/zmstpau/20131219_Pav_Merce_9498.jpeg",
  "images/zmstpau/20131219_Pav_Merce_9771.jpeg",
  "images/zmstpau/20131219_Pav_Merce_9774.jpeg",
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
        inteval={2000}>
        {items}
      </Carousel>
    );
  }
}

export default UnderConstructionBackground;
