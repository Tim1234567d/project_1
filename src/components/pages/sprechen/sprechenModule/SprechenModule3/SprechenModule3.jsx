import React from "react";
import { Sprechen_data_moduleThree } from "../../../../../data/data.js";

const SprechenModule3 = () => {
  return (
    <div className="wrapper">
      <section className="sprechenModule_section">
        <div className="sprechenModule_title">
        </div>
        <div className="sprechenModule_parts">
          {Sprechen_data_moduleThree.map((word) => (
            <div>
              <h3>{word.part_1}</h3>
              <h3>{word.teil_1}</h3>
              <p>{word.explanation_1_1}</p>
              <p>{word.explanation_1_2}</p>
              <p>{word.explanation_1_3}</p>
              <p>{word.explanation_1_4}</p>
              <p>{word.explanation_1_5}</p>
              <p>{word.explanation_1_6}</p>
              <h5>{word.task_1_1}</h5>
              <h5>{word.title_1_1}</h5>
              <p>{word.task_1_1_1}</p>
              <p>{word.task_1_1_2}</p>
              <p>{word.task_1_1_3}</p>

              <h5>{word.task_1_2}</h5>
              <h5>{word.title_1_2}</h5>
              <p>{word.task_1_2_1}</p>
              <p>{word.task_1_2_2}</p>
              <p>{word.task_1_2_3}</p>

              <h3>{word.teil_2}</h3>
              <p>{word.explanation_2_1}</p>
              <p>{word.explanation_2_2}</p>
              <h5>{word.task_2_1}</h5>
              <p>{word.task_2_1_1}</p>
              <p>{word.task_2_1_2}</p>
              <p>{word.task_2_1_3}</p>

              <p>{word.task_2_2}</p>
              <p>{word.task_2_2_1}</p>
              <p>{word.task_2_2_2}</p>
              <p>{word.task_2_2_3}</p>
              <p>{word.task_2_2_4}</p>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SprechenModule3;
