import React from "react";
import "./Difference.scss";
import Cat from "../../../assets/cat.jpg";
const Difference = () => {
  return (
    <div className="diff-container">
      <div className="diff-layout">
        <h2 className="diff-title">What makes us different?</h2>
        <div className="row row1">
          <div className="content">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, error mollitia. Accusantium architecto, quos illum
              dolor, aspernatur vitae quisquam, minus sapiente recusandae saepe
              corrupti facere earum omnis autem voluptatum ut provident nemo
              dolores aperiam laboriosam? Dolorem provident molestias totam
              repellat!
            </p>
          </div>
          <div className="image">
            <img src={Cat} alt="" srcset="" />
          </div>
        </div>
        <div className="row row2">
          <div className="image">
            <img src={Cat} alt="" srcset="" />
          </div>
          <div className="content">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, error mollitia. Accusantium architecto, quos illum
              dolor, aspernatur vitae quisquam, minus sapiente recusandae saepe
              corrupti facere earum omnis autem voluptatum ut provident nemo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
