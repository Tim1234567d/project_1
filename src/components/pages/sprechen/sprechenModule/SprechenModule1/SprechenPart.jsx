import React from "react";
import { useParams } from "react-router-dom";
import { Sprechen_data } from "../../../../../data/data.js";

const SprechenPart = () => {
  const { id } = useParams();
  return (
    <div className="wrapper">
      <section className="sprechenPart_section">
        {Sprechen_data.filter((services) => services.id === id).map((hey) => (
          <div>
            <p>{hey.title1}</p>
            {hey.title}
          </div>
        ))}
      </section>
    </div>
  );
};

export default SprechenPart;
