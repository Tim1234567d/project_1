import React from "react";
import {Lesen_data_moduleThree } from "../../../../../data/data.js";

const LesenPart3_5 = () => {
  return (
    <div className="wrapper">
      <section className="lesenPart_section">
        {Lesen_data_moduleThree.map((hey) => (
          <div>
            <h3 className="part1">{hey.part_5}</h3>
            <h5>{hey.teil_5}</h5>
            <p className="part1">{hey.explanation_5}</p>
            <p  className="part1">{hey.explanation_5_2}</p>
            <p className="part1">{hey.explanation_5_3}</p>


            <p>{hey.title_5}</p>
            <p className="part1" >{hey.subtitle_5}</p>

            <p>{hey.task_5_1}</p>
            <p>{hey.task_5_2}</p>
            <p>{hey.task_5_3}</p>
            <p>{hey.task_5_4}</p>
            <p>{hey.task_5_5}</p>
            <p>{hey.task_5_6}</p>
            <p>{hey.task_5_7}</p>
            <p className="part1">{hey.task_5_8}</p>

            <p>{hey.text_5_1}</p>
            <p>{hey.text_5_2}</p>
            <p>{hey.text_5_3}</p>
            <p>{hey.text_5_4}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LesenPart3_5;

