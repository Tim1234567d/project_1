import React from "react";
import { Lesen_data_moduleTwo } from "../../../../../data/data.js";

const LesenPart2_4 = () => {
  return (
    <div className="wrapper">
      <section className="lesenPart_section">
        {Lesen_data_moduleTwo.map((hey) => (
          <div>
            <h3 className="part1">{hey.part_4}</h3>
            <p className="part1">{hey.explanation_4}</p>
            <p className="part1">{hey.explanation_4_2}</p>
            <p className="part1">{hey.explanation_4_3}</p>

            <p>{hey.task_4_1}</p>
            <p>{hey.task_4_2}</p>
            <p>{hey.task_4_3}</p>
            <p>{hey.task_4_4}</p>
            <p>{hey.task_4_5}</p>
            <p>{hey.task_4_6}</p>
            <p className="part1">{hey.task_4_7}</p>

            <h3>{hey.title_4}</h3>

            <p>{hey.text_4}</p>
            <p>{hey.text_4_2}</p>
            <p>{hey.text_4_3}</p>
            <p>{hey.text_4_4}</p>
            <p>{hey.text_4_5}</p>
            <p>{hey.text_4_6}</p>
            <p>{hey.text_4_7}</p>
            <p>{hey.text_4_8}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LesenPart2_4;
