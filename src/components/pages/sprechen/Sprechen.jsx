import React from "react";
import { Sprechen_data } from "../../../data/data.js";
import OneSprechen from "./OneSprechen";

const Sprechen = () => {
  return (
    <div className="bigWrapper">
      <section className="services">
        <div className="wrapper">
          <h2 className="services_title">Sprechen</h2>

          <div className="service__cards">
            {Sprechen_data.map((services) => (
              <OneSprechen services={services} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sprechen;
