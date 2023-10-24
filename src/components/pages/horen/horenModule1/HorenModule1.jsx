import React from "react";
import { Link } from "react-router-dom";

const HorenModule1 = () => {
  return (
    <div className="wrapper">
      <section className="lesenModule_section">
        <div className="lesenModule_title">
          

        </div>
        <div className="lesenModule_parts">
          <Link to={`/horenModule1/horenPart1_1`}>
            <div className="lesenModule_part">
              <img
                className="lesenModule_backImg"
                src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                alt="service img"
              />
              <div className="lesenModule_part_title_wrapper">
                <h3 className="lesenModule_parts_title">horen part 1</h3>
              </div>
            </div>
          </Link>
          <Link to={`/horenModule1/horenPart1_2`}>
            <div className="lesenModule_part">
              <img
                className="lesenModule_backImg"
                src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                alt="service img"
              />
              <div className="lesenModule_part_title_wrapper">
                <h3 className="lesenModule_parts_title">horen part 2</h3>
              </div>
            </div>
          </Link>
          <Link to={`/horenModule1/horenPart1_3`}>
            <div className="lesenModule_part">
              <img
                className="lesenModule_backImg"
                src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                alt="service img"
              />
              <div className="lesenModule_part_title_wrapper">
                <h3 className="lesenModule_parts_title">horen part 3</h3>
              </div>
            </div>
          </Link>
          <Link to={`/horenModule1/horenPart1_4`}>
            <div className="lesenModule_part">
              <img
                className="lesenModule_backImg"
                src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                alt="service img"
              />
              <div className="lesenModule_part_title_wrapper">
                <h3 className="lesenModule_parts_title">horen part 4</h3>
              </div>
            </div>
          </Link>
          <Link to={`/horenModule1/horenPart1_5`}>
            <div className="lesenModule_part">
              <img
                className="lesenModule_backImg"
                src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                alt="service img"
              />
              <div className="lesenModule_part_title_wrapper">
                <h3 className="lesenModule_parts_title">horen part 5</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HorenModule1;
