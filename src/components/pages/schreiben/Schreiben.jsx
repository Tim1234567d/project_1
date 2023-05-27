import React from "react";
import classes from "./Schreiben.module.css";
import { Schreiben_data } from "../../../data/data.js";
import OneSchreiben from "./OneSchreiben";

const Schreiben = () => {
  return (
    <div className="bigWrapper">
      <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>Schreiben</h2>

          <div className={classes.service__cards}>
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
