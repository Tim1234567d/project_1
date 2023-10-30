import React from "react";
import { Horen_data_moduleFour } from "../../../../../data/data.js";

const HorenPart4_4= () => {
  return (
    <div className="wrapper">
      <section className="lesenPart_section">
        {Horen_data_moduleFour.map((hey) => (
          <div>  
            <h3 className="part1">{hey.part_4}</h3>
            <h3 className="part1">{hey.teil_4}</h3>
            <p>{hey.explanation_4}</p> 
            <p>{hey.explanation_4_2}</p>
            <p className="part1" >{hey.explanation_4_3}</p>

            <p>{hey.task_4_1}</p>
            <p>{hey.task_4_1_1}</p>
            <p>{hey.task_4_1_2}</p>
            <p className="part1">{hey.task_4_1_3}</p>

            <p>{hey.task_4_2}</p>
            <p>{hey.task_4_2_1}</p>
            <p>{hey.task_4_2_2}</p>
            <p className="part1">{hey.task_4_2_3}</p>

            <p>{hey.task_4_3}</p>
            <p>{hey.task_4_3_1}</p>
            <p>{hey.task_4_3_2}</p>
            <p className="part1">{hey.task_4_3_3}</p>

            <p>{hey.task_4_4}</p>
            <p>{hey.task_4_4_1}</p>
            <p>{hey.task_4_4_2}</p>
            <p className="part1">{hey.task_4_4_3}</p>

            <p>{hey.task_4_5}</p>
            <p>{hey.task_4_5_1}</p>
            <p>{hey.task_4_5_2}</p>
            <p className="part1">{hey.task_4_5_3}</p>

            <p>{hey.task_4_6}</p>
            <p>{hey.task_4_6_1}</p>
            <p>{hey.task_4_6_2}</p>
            <p className="part1">{hey.task_4_6_3}</p>

            <p>{hey.task_4_7}</p>
            <p>{hey.task_4_7_1}</p>
            <p>{hey.task_4_7_2}</p>
            <p className="part1">{hey.task_4_7_3}</p>

            <p>{hey.task_4_8}</p>
            <p>{hey.task_4_8_1}</p>
            <p>{hey.task_4_8_2}</p>
            <p className="part1">{hey.task_4_8_3}</p>

            
          </div>
        ))}
      </section>
    </div>
  );
};

export default HorenPart4_4;
