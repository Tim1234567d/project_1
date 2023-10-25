import React from "react";
import { Horen_data_moduleTwo } from "../../../../../data/data.js";

const HorenPart2_3= () => {
  return (
    <div className="wrapper">
      <section className="lesenPart_section">
        {Horen_data_moduleTwo.map((hey) => (
          <div>  
            <h3 className="part1">{hey.part_3}</h3>
            <h3 className="part1">{hey.teil_3}</h3>
            <p>{hey.explanation_3}</p> 
            <p>{hey.explanation_3_2}</p>
            <p className="part1" >{hey.explanation_3_3}</p>

            <p>{hey.task_3_1}</p>
            <p>{hey.task_3_1_1}</p>
            <p>{hey.task_3_1_2}</p>
            <p className="part1">{hey.task_3_1_3}</p>

            <p>{hey.task_3_2}</p>
            <p>{hey.task_3_2_1}</p>
            <p>{hey.task_3_2_2}</p>
            <p className="part1">{hey.task_3_2_3}</p>

            <p>{hey.task_3_3}</p>
            <p>{hey.task_3_3_1}</p>
            <p>{hey.task_3_3_2}</p>
            <p className="part1">{hey.task_3_3_3}</p>

            <p>{hey.task_3_4}</p>
            <p>{hey.task_3_4_1}</p>
            <p>{hey.task_3_4_2}</p>
            <p className="part1">{hey.task_3_4_3}</p>

            <p>{hey.task_3_5}</p>
            <p>{hey.task_3_5_1}</p>
            <p>{hey.task_3_5_2}</p>
            <p className="part1">{hey.task_3_5_3}</p>

            <p>{hey.task_3_6}</p>
            <p>{hey.task_3_6_1}</p>
            <p>{hey.task_3_6_2}</p>
            <p className="part1">{hey.task_3_6_3}</p>

            <p>{hey.task_3_7}</p>
            <p>{hey.task_3_7_1}</p>
            <p>{hey.task_3_7_2}</p>
            <p className="part1">{hey.task_3_7_3}</p>

          </div>
        ))}
      </section>
    </div>
  );
};

export default HorenPart2_3;
