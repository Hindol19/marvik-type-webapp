import React from "react";
import "./Tech.scss";
import Pytorch from "../../../assets/Tech/Pytorch.png";
import Keras from "../../../assets/Tech/Keras.png";
import Tensorflow from "../../../assets/Tech/tensor-flow.png";
import Azure from "../../../assets/Tech/Azure.png";
import Aws from "../../../assets/Tech/Aws.png";
import Python from "../../../assets/Tech/Python.png";
import Airflow from "../../../assets/Tech/Airflow.png";
import Databricks from "../../../assets/Tech/Databricks.png";
import Kubeflow from "../../../assets/Tech/kubeflow.png";
import Kubernetes from "../../../assets/Tech/kubernetes-horizontal.png";
import Mlflow from "../../../assets/Tech/Mlflow.png";
import ASpark from "../../../assets/Tech/spark.png";
const Tech = () => {
  return (
    <div className="tech-container">
      <div className="tech-layout">
        <div className="tech-card">
          <h3>The Technology we use:</h3>
          <div className="tech-icons">
            <div>
              <img src={Pytorch} alt="" />
            </div>
            <div>
              <img src={Keras} alt="" />
            </div>
            <div>
              <img src={Tensorflow} alt="" />
            </div>
            <div>
              <img src={Azure} alt="" />
            </div>
            <div>
              <img src={Aws} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Airflow} alt="" />
            </div>
            <div>
              <img src={Databricks} alt="" />
            </div>
            <div>
              <img src={Kubeflow} alt="" />
            </div>
            <div>
              <img src={Kubernetes} alt="" />
            </div>
            <div>
              <img src={Mlflow} alt="" />
            </div>
            <div>
              <img src={ASpark} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
