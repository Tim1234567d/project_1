import React from "react";
import { Horen_data_moduleOne } from "../../../../../data/data.js";

const HorenPart1_1= () => {
  return (
    <div className="wrapper">
      <section className="lesenPart_section">
        {Horen_data_moduleOne.map((hey) => (
          <div>  
            <h3 className="part1">{hey.part_1}</h3>
            <h3 className="part1">{hey.teil_1}</h3>
            <p>{hey.explanation_1}</p> 
            <p>{hey.explanation_1_2}</p>
            <p >{hey.explanation_1_3}</p>
            <p className="part1">{hey.explanation_1_4}</p>
            <p >{hey.explanation_1_5}</p>

            <p>{hey.task_1_1}</p>
            <p>{hey.task_1_1_1}</p>
            <p>{hey.task_1_2}</p>
            <p>{hey.task_1_2_1}</p>
            <p>{hey.task_1_2_2}</p>
            <p className="part1">{hey.task_1_2_3}</p>
            
            <p>{hey.task_1_3}</p>
            <p>{hey.task_1_3_1}</p>
            <p>{hey.task_1_4}</p>
            <p>{hey.task_1_4_1}</p>
            <p>{hey.task_1_4_2}</p>
            <p className="part1">{hey.task_1_4_3}</p>

            <p>{hey.task_1_5}</p>
            <p>{hey.task_1_5_1}</p>
            <p>{hey.task_1_6}</p>
            <p>{hey.task_1_6_1}</p>
            <p>{hey.task_1_6_2}</p>
            <p className="part1">{hey.task_1_6_3}</p>

            <p>{hey.task_1_7}</p>
            <p>{hey.task_1_7_1}</p>
            <p>{hey.task_1_8}</p>
            <p>{hey.task_1_8_1}</p>
            <p>{hey.task_1_8_2}</p>
            <p className="part1">{hey.task_1_8_3}</p>

            <p>{hey.task_1_9}</p>
            <p>{hey.task_1_9_1}</p>
            <p>{hey.task_1_10}</p>
            <p>{hey.task_1_10_1}</p>
            <p>{hey.task_1_10_2}</p>
            <p className="part1">{hey.task_1_10_3}</p>

            <p>{hey.task_1_11}</p>
            <p>{hey.task_1_11_1}</p>
            <p>{hey.task_1_12}</p>
            <p>{hey.task_1_12_1}</p>
            <p>{hey.task_1_12_2}</p>
            <p className="part1">{hey.task_1_12_3}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HorenPart1_1;
