import React from "react";
import { Exam_data } from "../../../data/data.js";
import classes from "./Exams.module.css";

const Exams = () => {
  return (
    <div className="bigWrapper">
      <div className={classes.serviceDetail_wrapper}>
        <div className={classes.serviceDetail_container}>
          <div className={classes.serviceDetail_main__info}>
            <div className={classes.serviceDetail_photo}>
              <img src={Exam_data.backImg} alt="nature" />
            </div>

            <h3 className={classes.serviceDetail_subtitle}>
              {Exam_data.title}
            </h3>
            <p className={classes.serviceDetail_text}> {Exam_data.text}</p>
            <p className={classes.serviceDetail_text}>{Exam_data.p1}</p>
            <p className={classes.serviceDetail_text}>{Exam_data.p2}</p>
            <p className={classes.serviceDetail_text}>{Exam_data.p3}</p>

            <h3 className={classes.serviceDetail_subtitle}>
              {Exam_data.subtitle}
            </h3>
            <p className={classes.serviceDetail_text2}>{Exam_data.task1}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task2}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task3}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task4}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task5}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task6}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task7}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task8}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task9}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task10}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task11}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task12}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task13}</p>
            <p className={classes.serviceDetail_text2}>{Exam_data.task14}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
