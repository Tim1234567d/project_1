import React from "react";
import { Schreiben_data } from "../../../../data/data.js";
import SubSchreibenModule from "./SubSchreibenModule1.jsx";

const SchreibenModule1 = () => {
  return (
    <div>
      <div className="bigWrapper">
        <div className="serviceDetail_wrapper">
          <div className="serviceDetail_container">
            <SubSchreibenModule services={Schreiben_data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchreibenModule1;
