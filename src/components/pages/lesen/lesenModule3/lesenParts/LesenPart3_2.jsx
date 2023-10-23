import React from "react";
import { Lesen_data_moduleThree } from "../../../../../data/data.js";

const LesenPart3_2 = () => {
  return (
    <div className="wrapper">
      <section className="lesenPart_section">
        {Lesen_data_moduleThree.map((hey) => (
          <div>
            <h3 className="part1">{hey.part_2}</h3>
            <h5>{hey.teil_2}</h5>
            <p className="part1">{hey.explanation_2}</p>
            <p className="part1">{hey.explanation_2_1}</p>
            <h3>{hey.title_2}</h3>
            <h3 className="part1">{hey.subtitle_2}</h3>
            <p>{hey.text_2}</p>
            <p>{hey.text_2_2}</p>
            <p>{hey.text_2_3}</p>
            <p>{hey.text_2_4}</p>
            <p>{hey.text_2_5}</p>
            <p className="part1">{hey.text_2_6}</p>
            <h3>{hey.teil_2}</h3>
            <p>{hey.task_2}</p>
            <p>{hey.task_2_2}</p>
            <p>{hey.task_2_3}</p>
            <p>{hey.task_2_4}</p>
            <p>{hey.task_2_5}</p>
            <p>{hey.task_2_6}</p>
            <p>{hey.task_2_7}</p>
            <p>{hey.task_2_8}</p>
            <p>{hey.task_2_9}</p>  
          </div>
        ))}
      </section>
    </div>
  );
};

export default LesenPart3_2;
