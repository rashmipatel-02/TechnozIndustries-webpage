import React, { useRef } from 'react';
import Slider from "react-slick";
import './Review.css';

const Slide = ({ quote, name, occupation }) => (
  <div className="slide">
    <div className="m-2">
      <i className="fa-solid fa-quote-right" style={{ color: "#f58634", fontSize: "45px" }}></i>
      <p>{quote}</p>
      <h5>{name}</h5>
      <h5>{occupation}</h5>
      <div className="icon">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fa-solid fa-star" style={{ color: "#f58634", fontSize: "18px" }}></i>
        ))}
      </div>
    </div>
  </div>
);

const Review = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidesData = [
    { quote: "Great things in business are never done by one person. They are done by a team of people.", name: "John Doe", occupation: "Businessman" },
    { quote: "Great things in business are never done by one person. They are done by a team of people.", name: "John Doe", occupation: "Businessman" },
    { quote: "Great things in business are never done by one person. They are done by a team of people.", name: "John Doe", occupation: "Businessman" },

  ];

  return (
    <div className="review-container text-center d-flex row py-5">
      <div className="col-md-6 col-12">
        <div className="review-img">
          <img src="https://web.technozindustries.com/wp-content/uploads/2024/09/a-firefighter-dressed-in-a-uniform-in-a-studio-1-1-e1714846787740.jpg" alt="" width={"100%"}/>
        </div>
      </div>
      <div className="review col-md-6 col-12">
        <div className="title">
          <h4 className="text-light mt-5 items-center fw-normal">
            <img src="/Slider Images/faviconimg.png" alt="" style={{ height: "30px", marginRight: "5px" }} />
            <span>Customer Review</span>
          </h4>
          <h3 className="text-light fs-2">What Clients Say About Us</h3>
        </div>

        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {slidesData.map((slide, index) => (
              <Slide key={index} {...slide} />
            ))}
          </Slider>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <button  className="button btn" onClick={() => sliderRef.current.slickPrev()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="button btn" onClick={() => sliderRef.current.slickNext()}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
