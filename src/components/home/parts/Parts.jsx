import React from "react";
import OnePart from "./OnePart";

const Parts = () => {
  return (
    <div className="bigWrapper">
      <section className="services">
        <div className="wrapper">
          <h2 className="services_title">МОДУЛИ</h2>

          <div className="service__cards">
            <OnePart />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parts;
