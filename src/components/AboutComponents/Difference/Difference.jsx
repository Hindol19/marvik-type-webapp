import React from "react";
import "./Difference.scss";
// import Cat from "../../../assets/cat.jpg";
import PIC1 from "../../../assets/Difference/pic1-min.jpg";
import PIC2 from "../../../assets/Difference/pic2-min.jpg";
const Difference = () => {
  return (
    <div className="diff-container">
      <div className="diff-layout">
        <h2 className="diff-title">What makes us different?</h2>
        <div className="row row1">
          <div className="content">
            <h3>Cutting-Edge Research and Innovation</h3>
            <p>
              Pentaneuron stands out by being at the forefront of AI research,
              constantly pushing boundaries in Computer Vision, NLP, Large
              Language Models, and Conversational AI. Our team of experts
              actively contributes to the AI community, publishes papers, and
              collaborates with top research institutions. We bring the latest
              advancements to our clients, delivering innovative,
              high-performance solutions.
            </p>
          </div>
          <div className="image">
            <img src={PIC1} alt="" srcset="" />
          </div>
        </div>
        <div className="row row2">
          <div className="image">
            <img src={PIC2} alt="" srcset="" />
          </div>
          <div className="content">
            <h3>Human-Centric and Ethical Approach</h3>
            <p>
              Unlike other agencies, Pentaneuron prioritizes a human-centric
              approach and ethical considerations in AI development. We address
              fairness, transparency, privacy, and bias in our systems. We
              strive for inclusive, interpretable AI models, maintain strict
              data protection protocols, and comply with regulations. Trust,
              accountability, and societal impact are integral to our solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
