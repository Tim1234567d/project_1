import React from "react";
import { Exam_data } from "../../../data/data.js";

const Exams = () => {
  return (
    <div className="wrapper">
      <section className="exams_contioner">
        <img className="exams_photo" src={Exam_data.backImg} alt="nature" />

        <h3 className="exams_subtitle">{Exam_data.title}</h3>

        <p className="exams_text"> {Exam_data.text}</p>
        <p className="exams_text">{Exam_data.p1}</p>
        <p className="exams_text">{Exam_data.p2}</p>
        <p className="exams_text">{Exam_data.p3}</p>

        <h3 className="exams_subtitle">{Exam_data.subtitle}</h3>

        <p className="exams_text2">{Exam_data.task1}</p>
        <p className="exams_text2">{Exam_data.task2}</p>
        <p className="exams_text2">{Exam_data.task3}</p>
        <p className="exams_text2">{Exam_data.task4}</p>
        <p className="exams_text2">{Exam_data.task5}</p>
        <p className="exams_text2">{Exam_data.task6}</p>
        <p className="exams_text2">{Exam_data.task7}</p>
        <p className="exams_text2">{Exam_data.task8}</p>
        <p className="exams_text2">{Exam_data.task9}</p>
        <p className="exams_text2">{Exam_data.task10}</p>
        <p className="exams_text2">{Exam_data.task11}</p>
        <p className="exams_text2">{Exam_data.task12}</p>
        <p className="exams_text2">{Exam_data.task13}</p>
        <p className="exams_text2">{Exam_data.task14}</p>
      </section>
    </div>
  );
};

export default Exams;
