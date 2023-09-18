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
            {/* Part 1 start */}
            {hey.part_1}
            <p>{hey.title1}</p> 
            <p>{hey.text}</p>
            <p style={{ paddingBottom: "50px" }}>{hey.text2}</p>
            <p>{hey.execise1}</p>
            <p>{hey.execise2}</p>
            <p>{hey.execise3}</p>
            <p>{hey.execise4}</p>
            <p>{hey.execise5}</p>
            <p>{hey.execise6}</p>
            <p>{hey.execise7}</p>
            <p>{hey.execise8}</p>
            <p>{hey.execise9}</p>
            <p style={{ paddingBottom: "50px" }}>{hey.execise10}</p>
            {/* {hey.title} */}
            <h3>{hey.subtitle}</h3>
            <p>{hey.name1}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.text1}</p>
            <p>{hey.name2}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.text2}</p>
            <p>{hey.name3}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.text3}</p>
            <p>{hey.name4}</p>
            <p>{hey.text4}</p>

            {/* part 2 start */}
            <h3 style={{ paddingBottom: "10px" }}>{hey.part_2}</h3>
            <p style={{ paddingBottom: "10px" }}>{hey.explanation_2}</p>
            <p style={{ paddingBottom: "50px" }}>{hey.explanation_2_1}</p>
            <h3>{hey.title_2}</h3>
            <h3 style={{ paddingBottom: "50px" }}>{hey.subtitle_2}</h3>
            <p>{hey.text_2}</p>
            <p>{hey.text_2_2}</p>
            <p>{hey.text_2_3}</p>
            <p>{hey.text_2_4}</p>
            <p>{hey.text_2_5}</p>
            <p style={{ paddingBottom: "50px" }}>{hey.text_2_6}</p>
            <h3>{hey.part_2}</h3>
            <p>{hey.task_2}</p>
            <p>{hey.task_2_2}</p>
            <p>{hey.task_2_3}</p>
            <p>{hey.task_2_4}</p>
            <p>{hey.task_2_5}</p>
            <p>{hey.task_2_6}</p>
            <p>{hey.task_2_7}</p>
            <p>{hey.task_2_8}</p>
            <p>{hey.task_2_9}</p>

            {/* part 3 start  */}
            <h3 style={{ paddingBottom: "10px" }}>{hey.part_3}</h3>
            <p style={{ paddingBottom: "10px" }}>{hey.explanation_3}</p>
            <p style={{ paddingBottom: "5px" }}>{hey.explanation_3_2}</p>
            <p style={{ paddingBottom: "50px" }}>{hey.explanation_3_3}</p>
            <h3>{hey.title_3}</h3>
            <p>{hey.text_3}</p>
            <p>{hey.text_3_2}</p>
            <p>{hey.text_3_3}</p>
            <p>{hey.text_3_4}</p>
            <p>{hey.text_3_5}</p>
            <p>{hey.text_3_6}</p>
            <p style={{ paddingBottom: "50px" }}>{hey.text_3_7}</p>

            <h3 style={{ paddingBottom: "10px" }}>{hey.part_3}</h3>
            <p>{hey.task_3_1}</p>
            <p>{hey.task_3_1_1}</p>
            <p>{hey.task_3_1_2}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.task_3_1_3}</p>

            <p>{hey.task_3_2}</p>
            <p>{hey.task_3_2_1}</p>
            <p>{hey.task_3_2_2}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.task_3_2_3}</p>

            <p>{hey.task_3_3}</p>
            <p>{hey.task_3_3_1}</p>
            <p>{hey.task_3_3_2}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.task_3_3_3}</p>

            <p>{hey.task_3_4}</p>
            <p>{hey.task_3_4_1}</p>
            <p>{hey.task_3_4_2}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.task_3_4_3}</p>

            <p>{hey.task_3_5}</p>
            <p>{hey.task_3_5_1}</p>
            <p>{hey.task_3_5_2}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.task_3_5_3}</p>

            <p>{hey.task_3_6}</p>
            <p>{hey.task_3_6_1}</p>
            <p>{hey.task_3_6_2}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.task_3_6_3}</p>

            <p>{hey.task_3_7}</p>
            <p>{hey.task_3_7_1}</p>
            <p>{hey.task_3_7_2}</p>
            <p style={{ paddingBottom: "10px" }}>{hey.task_3_7_3}</p>

          </div>
        ))}
      </section>
    </div>
  );
};

export default LesenPart;
