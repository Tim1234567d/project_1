import React from "react";
import { useParams } from "react-router-dom";
import { Schreiben_data } from "../../../../../data/data.js";

const SchreibenPart = () => {
  const { id } = useParams();
  return (
    <div className="wrapper">
      <section className="schreibenPart_section">
        {Schreiben_data.filter((services) => services.id === id).map((hey) => (
          <div>
            <p>{hey.title1}</p>
            {hey.title}
          </div>
        ))}
      </section>
    </div>
  );
};

export default SchreibenPart;
