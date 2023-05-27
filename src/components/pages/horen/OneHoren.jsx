import React from "react";
import { Link } from "react-router-dom";
import classes from "./Horen.module.css";

const OneHoren = ({ services }) => {
  return (
    <div key={services.id}>
      <Link to={`/module1/${services.id}`}>
        <div className={classes.service__card}>
          <img
            className={classes.service_backImg}
            src={services.backImg}
            alt="service img"
          />
          <div className={classes.service_title_wrapper}>
            <h3 className={classes.service_title}>{services.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OneHoren;
