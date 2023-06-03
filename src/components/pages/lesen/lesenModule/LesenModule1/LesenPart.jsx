import React from "react";
import { useParams } from "react-router-dom";
import { Lesen_data } from "../../../../../data/data.js";

const LesenPart = () => {
  const { id } = useParams();
  return (
    <div className="wrapper">
      <section className="lesenPart_section">
        {Lesen_data.filter((services) => services.id === id).map((hey) => (
          <div>
            <p>{hey.title1}</p>
            {hey.title}
          </div>
        ))}
      </section>
    </div>
  );
};

export default LesenPart;
