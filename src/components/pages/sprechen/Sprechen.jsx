import React from "react";
import classes from "./Sprechen.module.css";
import { Sprechen_data } from "../../../data/data.js";
import OneSprechen from "./OneSprechen";

const Sprechen = () => {
  return (
    <div className="bigWrapper">
      <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>Sprechen</h2>

          <div className={classes.service__cards}>
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
