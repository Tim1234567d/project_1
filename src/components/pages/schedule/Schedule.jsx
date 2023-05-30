import React from "react";
import { Schedule_data } from "../../../data/data.js";

const Schedule = () => {
  return (
    <div className="wrapper">
      <section className="schedule_container">
        <img className="schedule_photo" src={Schedule_data.backImg} alt="nature" />

        <h3 className="schedule_subtitle">{Schedule_data.title}</h3>

        <p className="schedule_text"> {Schedule_data.text}</p>
        <p className="schedule_text">{Schedule_data.p1}</p>
        <p className="schedule_text">{Schedule_data.p2}</p>
        <p className="schedule_text">{Schedule_data.p3}</p>

        <h3 className="schedule_subtitle">{Schedule_data.subtitle}</h3>

        <p className="schedule_text2">{Schedule_data.task1}</p>
        <p className="schedule_text2">{Schedule_data.task2}</p>
        <p className="schedule_text2">{Schedule_data.task3}</p>
        <p className="schedule_text2">{Schedule_data.task4}</p>
        <p className="schedule_text2">{Schedule_data.task5}</p>
        <p className="schedule_text2">{Schedule_data.task6}</p>
        <p className="schedule_text2">{Schedule_data.task7}</p>
        <p className="schedule_text2">{Schedule_data.task8}</p>
        <p className="schedule_text2">{Schedule_data.task9}</p>
        <p className="schedule_text2">{Schedule_data.task10}</p>
        <p className="schedule_text2">{Schedule_data.task11}</p>
        <p className="schedule_text2">{Schedule_data.task12}</p>
        <p className="schedule_text2">{Schedule_data.task13}</p>
        <p className="schedule_text2">{Schedule_data.task14}</p>
      </section>
    </div>
  );
};

export default Schedule;
