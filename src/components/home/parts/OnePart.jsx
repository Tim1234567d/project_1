import React from "react";
import { Link } from "react-router-dom";
import classes from "./Parts.module.css";

const OnePart = () => {
  return (
    <div>
      <Link to="/lesen">
        <div className={classes.service__card}>
          <img
            className={classes.service_backImg}
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className={classes.service_title_wrapper}>
            <h3 className={classes.service_title}>Lesen</h3>
          </div>
        </div>
      </Link>

      <Link to="/horen">
        <div className={classes.service__card}>
          <img
            className={classes.service_backImg}
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className={classes.service_title_wrapper}>
            <h3 className={classes.service_title}>Hören</h3>
          </div>
        </div>
      </Link>
      <Link to="/schreiben">
        <div className={classes.service__card}>
          <img
            className={classes.service_backImg}
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className={classes.service_title_wrapper}>
            <h3 className={classes.service_title}>Schreiben</h3>
          </div>
        </div>
      </Link>
      <Link to="/sprechen">
        <div className={classes.service__card}>
          <img
            className={classes.service_backImg}
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className={classes.service_title_wrapper}>
            <h3 className={classes.service_title}>Sprechen</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OnePart;
