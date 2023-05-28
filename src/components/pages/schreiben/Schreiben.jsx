import React from "react";
import { Schreiben_data } from "../../../data/data.js";
import OneSchreiben from "./OneSchreiben";

const Schreiben = () => {
  return (
    <div className="bigWrapper">
      <section className="services">
        <div className="wrapper">
          <h2 className="services_title">Schreiben</h2>

          <div className="service__cards">
            {Schreiben_data.map((services) => (
              <OneSchreiben services={services} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schreiben;
