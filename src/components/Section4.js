import React from "react";
import "../styles/section4.css";

const Section4 = () => {
  return (
    <div className="section4">
      <h1 className="heading">Onboard yourself in less than a min</h1>
      <div className="content">
        <div className="cont-1">
          <div className="round">1</div>
          <h3 className="head-cont1">GST Number</h3>
          <div className="description">
            Provide your GST number registered with the company
          </div>
        </div>
        <div className="cont-2">
          <div className="round">2</div>
          <h3 className="head-cont1">Company Details</h3>
          <div className="description">
            Provide company details such as business owner name, email, address
            and primary category
          </div>
        </div>
        <div className="cont-3">
          <div className="round" id="round-3">
            ✔
          </div>
          <h3 className="head-cont1">Violla!</h3>
          <div className="description">
            You've been successfully onboarded on zoozle
          </div>
        </div>
      </div>
      <div className="slides"></div>
    </div>
  );
};

export default Section4;
