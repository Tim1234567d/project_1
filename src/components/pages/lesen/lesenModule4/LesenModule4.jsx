import React from "react";
import { Link } from "react-router-dom";

const LesenModule4 = () => {
  return (
    <div className="wrapper">
      <section className="lesenModule_section">
        <div className="lesenModule_title">
          <p>
            Für das Modul Lesen haben Sie insgesamt 65 Minuten Zeit. Die
            Zeitangaben zu den einzelnen Tei len sind nicht festgelegt, sondern
            dienen nur zur Orientierung. Sie können also einen Teil schneller
            bearbeiten und haben dann mehr Zeit für die anderen Teile. Beachten
            Sie jedoch, dass Sie innerhalb der 65 Minuten alle Lösungen in den
            Antwortbogen übertragen müssen.
          </p>
            <br />
          <p>
            Sie können im Modul Lesen insgesamt 30 Punkte erreichen, die in 100
            Ergebnispunkte umgerechnet werden (siehe Seite 7). Zum Bestehen
            dieses Moduls müssen Sie mindestens 18 Aufgaben (60 Prozent) richtig
            lösen.
          </p>

          <p>
            Zum Modul Lesen erhalten Sie die Aufgabenblätter mit den Texten und
            den Aufgaben sowie den Antwortbogen. Auf Wunsch erhalten Sie auch
            gestempeltes Papier für Notizen. In der Prüfung dürfen Sie keine
            Hilfsmittel wie Wörterbücher, Mobiltelefone usw. benutzen.
          </p>
        </div>
        <div className="lesenModule_parts">  
            <Link to={`/lesenModule4/lesenPart4_1`}>
              <div className="lesenModule_part">
                <img
                  className="lesenModule_backImg"
                  src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                  alt="service img"
                />
                <div className="lesenModule_part_title_wrapper">
                  <h3 className="lesenModule_parts_title">lesen module 4 part 1</h3>
                </div>
              </div>
            </Link>
            <Link to={`/lesenModule4/lesenPart4_2`}>
              <div className="lesenModule_part">
                <img
                  className="lesenModule_backImg"
                  src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                  alt="service img"
                />
                <div className="lesenModule_part_title_wrapper">
                  <h3 className="lesenModule_parts_title">lesen module 4 part 2</h3>
                </div>
              </div>
            </Link>
            <Link to={`/lesenModule4/lesenPart4_3`}>
              <div className="lesenModule_part">
                <img
                  className="lesenModule_backImg"
                  src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                  alt="service img"
                />
                <div className="lesenModule_part_title_wrapper">
                  <h3 className="lesenModule_parts_title">lesen module 4 part 3</h3>
                </div>
              </div>
            </Link>
            <Link to={`/lesenModule4/lesenPart4_4`}>
              <div className="lesenModule_part">
                <img
                  className="lesenModule_backImg"
                  src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                  alt="service img"
                />
                <div className="lesenModule_part_title_wrapper">
                  <h3 className="lesenModule_parts_title">lesen module 4 part 4</h3>
                </div>
              </div>
            </Link>
            <Link to={`/lesenModule4/lesenPart4_5`}>
              <div className="lesenModule_part">
                <img
                  className="lesenModule_backImg"
                  src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                  alt="service img"
                />
                <div className="lesenModule_part_title_wrapper">
                  <h3 className="lesenModule_parts_title">lesen module 4 part 5</h3>
                </div>
              </div>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default LesenModule4;
