import React from "react";
import { Horen_data } from "../../../../data/data.js";
import SubHorenModule from "./SubHorenModule1.jsx";

const HorenModule1 = () => {
  return (
    <div>
      <div className="bigWrapper">
        <div className="serviceDetail_wrapper">
          <div className="serviceDetail_container">
            <SubHorenModule services={Horen_data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorenModule1;
