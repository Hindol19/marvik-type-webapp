import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Testimonials.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import Cat from "../../../assets/bg.jpg";
function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carouselItem-container">
      <div className="carouselItem-layout">
        <h2 className="testi-title">Our Testimonials</h2>
        <Carousel activeIndex={index} onSelect={handleSelect} show={3}>
          <Carousel.Item>
            <img className="d-block w-100" src={Cat} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                aliquam excepturi laudantium rem quam quo nulla nobis incidunt
                voluptatibus voluptatem? Incidunt, magni atque. Dignissimos,
                quasi necessitatibus sapiente eligendi totam molestias?
                Provident sunt itaque quos quo."
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Cat} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                aliquam excepturi laudantium rem quam quo nulla nobis incidunt
                voluptatibus voluptatem? Incidunt, magni atque. Dignissimos,
                quasi necessitatibus sapiente eligendi totam molestias?
                Provident sunt itaque quos quo."
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Cat} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                aliquam excepturi laudantium rem quam quo nulla nobis incidunt
                voluptatibus voluptatem? Incidunt, magni atque. Dignissimos,
                quasi necessitatibus sapiente eligendi totam molestias?
                Provident sunt itaque quos quo."
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
