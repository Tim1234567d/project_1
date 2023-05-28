import React from "react";
import { Lesen_data } from "../../../../data/data.js";
import SubLesenModule from "./SubLesenModule1";

const LesenModule1 = () => {
  return (
    <div>
      <div className="bigWrapper">
        <div className="serviceDetail_wrapper">
          <div className="serviceDetail_container">
            <SubLesenModule services={Lesen_data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LesenModule1;
