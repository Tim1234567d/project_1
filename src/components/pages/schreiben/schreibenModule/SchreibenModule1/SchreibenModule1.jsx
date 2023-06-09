import React from "react";
import { Link } from "react-router-dom";
import { Schreiben_data } from "../../../../../data/data.js";
// import SubSchreibenModule from "./SubSchreibenModule1.jsx";

const SchreibenModule1 = () => {
  return (
    <div className="wrapper">
      <section className="schreibenModule_section">
        <div className="schreibenModule_title">
          <p>
            Für das Modul Lesen haben Sie insgesamt 65 Minuten Zeit. Die
            Zeitangaben zu den einzelnen Tei len sind nicht festgelegt, sondern
            dienen nur zur Orientierung. Sie können also einen Teil schneller
            bearbeiten und haben dann mehr Zeit für die anderen Teile. Beachten
            Sie jedoch, dass Sie innerhalb der 65 Minuten alle Lösungen in den
            Antwortbogen übertragen müssen.
          </p>

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
        <div className="schreibenModule_parts">
          {Schreiben_data.map((word) => (
            <Link to={`/schreibenModule1/${word.id}`}>
              <div className="schreibenModule_part">
                <img
                  className="schreibenModule_backImg"
                  src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg"
                  alt="service img"
                />
                <div className="schreibenModule_part_title_wrapper">
                  <h3 className="schreibenModule_parts_title">{word.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SchreibenModule1;
