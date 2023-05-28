import React from "react";
import { Link } from "react-router-dom";

const OneHoren = ({ services }) => {
  return (
    <div key={services.id}>
      <Link to={`/module1/${services.id}`}>
        <div className="service__card">
          <img
            className="service_backImg"
            src={services.backImg}
            alt="service img"
          />
          <div className="service_title_wrapper">
            <h3 className="service_title">{services.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OneHoren;
