import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/imagens/banner.png",
  "/imagens/banner.png",
  "/imagens/banner.png",
  // adicione quantas quiser
];

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carrossel-container" style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img src={src} alt={`Banner ${idx + 1}`} style={{ width: "100%", height: "auto" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default Carousel;