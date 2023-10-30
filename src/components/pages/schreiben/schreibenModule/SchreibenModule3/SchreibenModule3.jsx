import React from "react"
import { Schreiben_data_moduleThree } from "../../../../../data/data.js";


const SchreibenModule3 = () => {
  return (
    <div className="wrapper">
      <section className="schreibenModule_section">
        <div className="schreibenModule_title">
        </div>
        <div className="schreibenModule_parts">
          {Schreiben_data_moduleThree.map((word) => (
            <div>
              <h3>{word.part_1}</h3>
              <h3>{word.teil_1}</h3>
              <p>{word.explanation_1_1}</p>
              <p>{word.task_1_1}</p>
              <p>{word.task_1_2}</p>
              <p>{word.task_1_3}</p>
              <p>{word.task_1_4}</p>
              <p>{word.explanation_1_2}</p>
              <p>{word.explanation_1_3}</p>

              <h3>{word.teil_2}</h3>
              <p>{word.explanation_2_1}</p>
              <p>{word.task_2_1}</p>
              <p>{word.task_2_2}</p>
              <p>{word.task_2_3}</p>
              <p>{word.task_2_4}</p>
              <p>{word.explanation_2_2}</p>
              <p>{word.explanation_2_3}</p>


            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SchreibenModule3;
