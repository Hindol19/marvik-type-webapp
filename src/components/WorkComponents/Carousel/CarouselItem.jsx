import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselItem.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Bg from "../../../assets/Transparent.png";
import Bg from "../../../assets/bg.jpg";
function CarouselItem() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carouselItem-container">
      <div className="carouselItem-layout">
        <h2 className="testi-title">What our clients say</h2>
        <Carousel activeIndex={index} onSelect={handleSelect} show={3}>
          <Carousel.Item>
            <img
              className="carouselItem-image d-block w-100"
              src={Bg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Ayush Choudhury</h3>
              <p>
                "He did a great job with the task assigned to him and submitted
                it within the stipulated time. I believe he will be a great
                asset in his future endeavours"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" carouselItem-image d-block w-100"
              src={Bg}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Elizabeth L, UC San Diego</h3>
              <p>
                "Engineers in Pentaneuron completed the task on time and
                communicated well throughout."
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="carouselItem-image d-block w-100"
              src={Bg}
              alt="Third slide"
            />

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
          </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselItem;
