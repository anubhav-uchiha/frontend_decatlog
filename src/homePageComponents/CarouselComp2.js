import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../styles/CarouselComp.module.css";

function CarouselComp2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "relative",
          bottom: "70px",
        }}
      >
        <ul className={style.customDots}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div className={`${style.outerDiv}`}>
        <div className={`${style.childOne}`}>
          <h1 className={`${style.heading}`}>
            Lorem Ipsum <span className={`${style.spanDolor}`}>Dolor Sit</span>
          </h1>
          <p className={`${style.para}`}>
            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
            Dolor Sit Amet Lorem Ipsum....
          </p>
          <button className={`${style.btn}`}>Subscribe Now</button>
        </div>
        <div
          className={`${style.childTwo}`}
          style={{ background: "url(/images/services/carouselImage.png)" }}
        ></div>
      </div>

      <div className={`${style.outerDiv} `}>
        <div className={`${style.childOne}`}>
          <h1 className={`${style.heading}`}>
            Lorem Ipsum <span className={`${style.spanDolor}`}>Dolor Sit</span>
          </h1>
          <p className={`${style.para}`}>
            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
            Dolor Sit Amet Lorem Ipsum....
          </p>
          <button className={`${style.btn}`}>Subscribe Now</button>
        </div>
        <div
          className={`${style.childTwo}`}
          style={{ background: "url(/images/services/carouselImage.png)" }}
        ></div>
      </div>

      <div className={`${style.outerDiv}`}>
        <div className={`${style.childOne}`}>
          <h1 className={`${style.heading}`}>
            Lorem Ipsum <span className={`${style.spanDolor}`}>Dolor Sit</span>
          </h1>
          <p className={`${style.para}`}>
            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
            Dolor Sit Amet Lorem Ipsum....
          </p>
          <button className={`${style.btn}`}>Subscribe Now</button>
        </div>
        <div
          className={`${style.childTwo}`}
          style={{ background: "url(/images/services/carouselImage.png)" }}
        ></div>
      </div>

      <div className={`${style.outerDiv}`}>
        <div className={`${style.childOne}`}>
          <h1 className={`${style.heading}`}>
            Lorem Ipsum <span className={`${style.spanDolor}`}>Dolor Sit</span>
          </h1>
          <p className={`${style.para}`}>
            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
            Dolor Sit Amet Lorem Ipsum....
          </p>
          <button className={`${style.btn}`}>Subscribe Now</button>
        </div>
        <div
          className={`${style.childTwo}`}
          style={{ background: "url(/images/services/carouselImage.png)" }}
        ></div>
      </div>
    </Slider>
  );
}

export default CarouselComp2;
