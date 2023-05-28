import React from "react";
import { Horen_data } from "../../../data/data.js";
import OneHoren from "./OneHoren";

const Horen = () => {
  return (
    <div className="bigWrapper">
      <section className="services">
        <div className="wrapper">
          <h2 className="services_title">Horen</h2>

          <div className="service__cards">
            {Horen_data.map((services) => (
              <OneHoren services={services} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Horen;
