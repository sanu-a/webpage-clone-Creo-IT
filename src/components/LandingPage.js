import React from "react";
import Category from "./Category";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <header className="name-zoozle">ZOOZLE</header>
      <Section1 />
      <Category />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default LandingPage;
