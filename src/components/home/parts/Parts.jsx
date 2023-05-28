import React from "react";
import classes from "./Parts.module.css";
import OnePart from "./OnePart";

const Parts = () => {
  return (
    <div className="bigWrapper">
      <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>МОДУЛИ</h2>

          <div className={classes.service__cards}>
            <OnePart />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parts;
