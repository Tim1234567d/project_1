import React from "react";
import { Link } from "react-router-dom";

const OnePart = () => {
  return (
    <div>
      <Link to="/lesen">
        <div className="parts_item">
          <img
            className="parts_item_backImg"
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className="parts_title_wrapper">
            <h3 className="parts_item_title">Lesen</h3>
          </div>
        </div>
      </Link>

      <Link to="/horen">
        <div className="parts_item">
          <img
            className="parts_item_backImg"
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className="parts_title_wrapper">
            <h3 className="parts_item_title">Hören</h3>
          </div>
        </div>
      </Link>
      <Link to="/schreiben">
        <div className="parts_item">
          <img
            className="parts_item_backImg"
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className="parts_title_wrapper">
            <h3 className="parts_item_title">Schreiben</h3>
          </div>
        </div>
      </Link>
      <Link to="/sprechen">
        <div className="parts_item">
          <img
            className="parts_item_backImg"
            src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
            alt="service img"
          />
          <div className="parts_title_wrapper">
            <h3 className="parts_item_title">Sprechen</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OnePart;
