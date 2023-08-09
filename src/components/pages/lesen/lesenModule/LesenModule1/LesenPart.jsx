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
            {hey.title}
            <p>{hey.title1}</p>
            <p>{hey.text}</p>
            <p>{hey.text2}</p>
            <br />
            <br />
            <br />
            <p>{hey.execise1}</p>
            <p>{hey.execise2}</p>
            <p>{hey.execise3}</p>
            <p>{hey.execise4}</p>
            <p>{hey.execise5}</p>
            <p>{hey.execise6}</p>
            <p>{hey.execise7}</p>
            <p>{hey.execise8}</p>
            <p>{hey.execise9}</p>
            <p>{hey.execise10}</p>
            <br />
            <br />
            <br />
            {hey.title}
            <h3>{hey.subtitle}</h3>
            <p>{hey.name1}</p>
            <p>{hey.text1}</p>
            <br />
            <p>{hey.name2}</p>
            <p>{hey.text2}</p>
            <br />
            <p>{hey.name3}</p>
            <p>{hey.text3}</p>
            <br />
            <p>{hey.name4}</p>
            <p>{hey.text4}</p>
            <br />
            
          </div>
        ))}
      </section>
    </div>
  );
};

export default LesenPart;
