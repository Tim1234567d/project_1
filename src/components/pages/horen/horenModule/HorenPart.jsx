import React from "react";
import { useParams } from "react-router-dom";
import { Horen_data } from "../../../../data/data.js";

const HorenPart = () => {
  const { id } = useParams();
  return (
    <div className="bigWrapper">
      <section className="services">
        <div className="wrapper">
          <div className="service__cards">
            {Horen_data.filter((services) => services.id === id).map((hey) => (
              <div>
                <p>{hey.title1}</p>
                {hey.title}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorenPart;
