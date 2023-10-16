import React from "react";
import { Lesen_data_moduleTwo } from "../../../../../data/data.js";

const LesenPart2_1 = () => { 
  return (
    <div className="wrapper">
      <section className="lesenPart_section">
        {Lesen_data_moduleTwo.map((hey) => (
          <div>
            <h3 className="part1">{hey.part_1}</h3>
            <p>{hey.explanation_1}</p>
            <p>{hey.explanation_1_2}</p>
            <p className="part1">{hey.explanation_1_3}</p>
            <p>{hey.execise1}</p>
            <p>{hey.execise2}</p>
            <p>{hey.execise3}</p>
            <p>{hey.execise4}</p>
            <p>{hey.execise5}</p>
            <p>{hey.execise6}</p>
            <p>{hey.execise7}</p>
            <p>{hey.execise8}</p>
            <p>{hey.execise9}</p>
            <p className="part1">{hey.execise10}</p>

            <h3>{hey.subtitle}</h3>
            <p>{hey.name1}</p>
            <p className="part1">{hey.text1}</p>
            <p>{hey.name2}</p>
            <p className="part1">{hey.text2}</p>
            <p>{hey.name3}</p>
            <p className="part1">{hey.text3}</p>
            <p>{hey.name4}</p>
            <p>{hey.text4}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LesenPart2_1;
