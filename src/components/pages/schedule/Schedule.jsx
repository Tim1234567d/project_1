import React from "react";
import { Schedule_data } from "../../../data/data.js";

const Schedule = () => {
  return (
    <div className="bigWrapper">
      <div className="serviceDetail_wrapper">
        <div className="serviceDetail_container">
          <div className="serviceDetail_main__info">
            <div>
              <img
                className="serviceDetail_photo"
                src={Schedule_data.backImg}
                alt="nature"
              />
            </div>

            <h3 className="serviceDetail_subtitle">{Schedule_data.title}</h3>
            <p className="serviceDetail_text"> {Schedule_data.text}</p>
            <p className="serviceDetail_text">{Schedule_data.p1}</p>
            <p className="serviceDetail_text">{Schedule_data.p2}</p>
            <p className="serviceDetail_text">{Schedule_data.p3}</p>

            <h3 className="serviceDetail_subtitle">{Schedule_data.subtitle}</h3>
            <p className="serviceDetail_text2">{Schedule_data.task1}</p>
            <p className="serviceDetail_text2">{Schedule_data.task2}</p>
            <p className="serviceDetail_text2">{Schedule_data.task3}</p>
            <p className="serviceDetail_text2">{Schedule_data.task4}</p>
            <p className="serviceDetail_text2">{Schedule_data.task5}</p>
            <p className="serviceDetail_text2">{Schedule_data.task6}</p>
            <p className="serviceDetail_text2">{Schedule_data.task7}</p>
            <p className="serviceDetail_text2">{Schedule_data.task8}</p>
            <p className="serviceDetail_text2">{Schedule_data.task9}</p>
            <p className="serviceDetail_text2">{Schedule_data.task10}</p>
            <p className="serviceDetail_text2">{Schedule_data.task11}</p>
            <p className="serviceDetail_text2">{Schedule_data.task12}</p>
            <p className="serviceDetail_text2">{Schedule_data.task13}</p>
            <p className="serviceDetail_text2">{Schedule_data.task14}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
