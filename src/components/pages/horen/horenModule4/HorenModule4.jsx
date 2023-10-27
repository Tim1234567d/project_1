import React from "react";
import { Link } from "react-router-dom";

const HorenModule4 = () => {
  return (
    <div className="wrapper">
      <section className="lesenModule_section">
        <div className="lesenModule_title">
        </div>
        <div className="lesenModule_parts">
          <Link to={`/horenModule4/horenPart4_1`}>
            <div className="lesenModule_part">
              <img
                className="lesenModule_backImg"
                src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                alt="service img"
              />
              <div className="lesenModule_part_title_wrapper">
                <h3 className="lesenModule_parts_title">horen module 4 part 1</h3>
              </div>
            </div>
          </Link>
          <Link to={`/horenModule4/horenPart4_2`}>
            <div className="lesenModule_part">
              <img
                className="lesenModule_backImg"
                src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                alt="service img"
              />
              <div className="lesenModule_part_title_wrapper">
                <h3 className="lesenModule_parts_title">horen module 4 part 2</h3>
              </div>
            </div>
          </Link>
          <Link to={`/horenModule4/horenPart4_3`}>
            <div className="lesenModule_part">
              <img
                className="lesenModule_backImg"
                src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                alt="service img"
              />
              <div className="lesenModule_part_title_wrapper">
                <h3 className="lesenModule_parts_title">horen module 4 part 3</h3>
              </div>
            </div>
          </Link>
          <Link to={`/horenModule4/horenPart4_4`}>
            <div className="lesenModule_part">
              <img
                className="lesenModule_backImg"
                src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                alt="service img"
              />
              <div className="lesenModule_part_title_wrapper">
                <h3 className="lesenModule_parts_title">horen module 4 part 4</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HorenModule4;
