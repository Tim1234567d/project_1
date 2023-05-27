import React from "react";
import classes from "./Lesen.module.css";
import { Link } from "react-router-dom";

const Lesen = () => {
  return (
    <div className="bigWrapper">
      <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>Lesen</h2>

          <div className={classes.service__cards}>
            <Link to="/lesenModule1">
              <div className={classes.service__card}>
                <img
                  className={classes.service_backImg}
                  src="https://media.istockphoto.com/id/1284691550/de/vektor/blaue-abstrakte-geometrische-dynamische-form-papier-schichten-subtilen-hintergrundvektor.jpg?s=612x612&w=0&k=20&c=u3jENSNjf1hW7G4Q0Uxz05qCkul-IvVu63J9oVBk16A="
                  alt="service img"
                />
                <div className={classes.service_title_wrapper}>
                  <h3 className={classes.service_title}>lesen module 1</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lesen;
