import React from "react";
import { Sprechen_data } from "../../../../data/data.js";
import SubSprechenModule1 from "./SubSprechenModule1.jsx";

const SprechenModule1 = () => {
  return (
    <div>
      <div className="bigWrapper">
        <div className="serviceDetail_wrapper">
          <div className="serviceDetail_container">
            <SubSprechenModule1 services={Sprechen_data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprechenModule1;
