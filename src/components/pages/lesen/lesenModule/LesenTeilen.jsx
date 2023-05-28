import React from "react";
import { useParams } from "react-router-dom";
import { Lesen_data } from "../../../../data/data.js";

const LesenTeilen = () => {
  const { id } = useParams();
  return (
    <div className="bigWrapper">
      <section className="services">
        <div className="wrapper">
          <div className="service__cards">
            {Lesen_data.filter((services) => services.id === id).map((hey) => (
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

export default LesenTeilen;
