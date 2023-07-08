import React from "react";
import "./SingleWork.scss";
import cat from "../../../assets/cat.jpg";
const SingleWork = () => {
  return (
    <div className="singleWork-container">
      <div className="work-left">
        <img src={cat} alt="/" srcset="" />
      </div>
      <div className="work-content">
        <h2>Work Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          labore ad debitis hic velit sit dolores harum soluta nemo! Assumenda
          est reprehenderit, animi alias doloremque quod earum sit reiciendis.
          Magnam.
        </p>
      </div>
    </div>
  );
};

export default SingleWork;
