import React from "react";
import { Horen_data_moduleFour } from "../../../../../data/data.js";

const HorenPart4_2= () => {
  return (
    <div className="wrapper">
      <section className="lesenPart_section">
        {Horen_data_moduleFour.map((hey) => (
          <div>  
            <h3 className="part1">{hey.part_2}</h3>
            <h3 className="part1">{hey.teil_2}</h3>
            <p>{hey.explanation_2}</p> 
            <p>{hey.explanation_2_2}</p>
            <p className="part1" >{hey.explanation_2_3}</p>

            <p>{hey.task_2_1}</p>
            <p>{hey.task_2_1_1}</p>
            <p>{hey.task_2_1_2}</p>
            <p className="part1">{hey.task_2_1_3}</p>

            <p>{hey.task_2_2}</p>
            <p>{hey.task_2_2_1}</p>
            <p>{hey.task_2_2_2}</p>
            <p className="part1">{hey.task_2_2_3}</p>

            <p>{hey.task_2_3}</p>
            <p>{hey.task_2_3_1}</p>
            <p>{hey.task_2_3_2}</p>
            <p className="part1">{hey.task_2_3_3}</p>

            <p>{hey.task_2_4}</p>
            <p>{hey.task_2_4_1}</p>
            <p>{hey.task_2_4_2}</p>
            <p className="part1">{hey.task_2_4_3}</p>

            <p>{hey.task_2_5}</p>
            <p>{hey.task_2_5_1}</p>
            <p>{hey.task_2_5_2}</p>
            <p className="part1">{hey.task_2_5_3}</p>

            <p>{hey.task_2_6}</p>
            <p>{hey.task_2_6_1}</p>
            <p>{hey.task_2_6_2}</p>
            <p className="part1">{hey.task_2_6_3}</p>
           

           

          </div>
        ))}
      </section>
    </div>
  );
};

export default HorenPart4_2;
