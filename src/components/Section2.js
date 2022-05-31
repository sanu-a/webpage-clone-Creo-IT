import React from "react";
import "../styles/section2.css";

const Section2 = () => {
  return (
    <div className="section-2">
      <div className="content1">
        <div className="description">
          <h2 className="heading">Why Zoozle?</h2>
          <span className="content-desc">
            <span>
              Business owners can list their products on zoozle for free and
              sell them to millions of business buyers across India. On zoozle
              you pay a small commission on sales.
            </span>
            <span>
              To increase sales on zoozle, business owners can generate sales on
              demand by broadcasting their deals to specific buyers, in a
              specific city, region or nationwide.
            </span>
            <span>
              Zoozle coins are effective in helping businesses reach thousands
              of buyers. Thus zoozle creates a symbiotic Business community.
            </span>
          </span>
        </div>
        <img src="" alt="image not found" />
      </div>
      <div className="content2">
        <div id="content2-1" className="rad">
          Buy products at lower price than available online
        </div>
        <div id="content2-2" className="rad">
          Sell products at lowest commission
        </div>
        <div id="content2-3" className="rad">
          Generate sales on demand
        </div>
      </div>
    </div>
  );
};

export default Section2;
