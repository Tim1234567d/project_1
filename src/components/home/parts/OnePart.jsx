import React from "react";
import { Link } from "react-router-dom";

const OnePart = () => {
  return (
    <div>
      <Link to="/lesen">
        <div className="service__card">
          <img
            className="service_backImg"
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className="service_title_wrapper">
            <h3 className="service_title">Lesen</h3>
          </div>
        </div>
      </Link>

      <Link to="/horen">
        <div className="service__card">
          <img
            className="service_backImg"
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className="service_title_wrapper">
            <h3 className="service_title">Hören</h3>
          </div>
        </div>
      </Link>
      <Link to="/schreiben">
        <div className="service__card">
          <img
            className="service_backImg"
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className="service_title_wrapper">
            <h3 className="service_title">Schreiben</h3>
          </div>
        </div>
      </Link>
      <Link to="/sprechen">
        <div className="service__card">
          <img
            className="service_backImg"
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className="service_title_wrapper">
            <h3 className="service_title">Sprechen</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OnePart;
