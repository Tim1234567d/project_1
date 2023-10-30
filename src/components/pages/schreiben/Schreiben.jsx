import React from "react";
import { Link } from "react-router-dom";

const Schreiben = () => {
  return (
    <div className="wrapper">
      <section className="schreiben_section">
        <h2 className="schreiben_title">Schreiben</h2>
        <div className="schreiben_modules">
          <h1>Schreiben: Übersicht</h1>
          <p>Das Modul Schreiben besteht aus zwei Teilen.</p>
          <p>Teil 1</p>
          <p>Teil 2</p>
          <h5>Zeit</h5>
          <p>Der Prüfungsteil Schreiben dauert insgesamt 75 Minuten.</p>
          <p>Die Zeitangaben zu den einzelnen Teilen sind nicht festgelegt, ~ondern dienen nur zur Orientierung.
          Sie können also bei einem Teil schneller arbeiten und haben dann für einen anderen Teil mehr Zeit.
          Beachten Sie jedoch, dass sie Ihre Texte innerhalb der Gesamtzeit von 75 Minuten in die Antwortbögen
          schreiben müssen. Nur diese werden bewertet.</p>
          <h5>Punkte</h5>
          <p>Wie in den anderen Modulen können Sie auch im Modul Schreiben 100 Punkte erreichen.</p>
          <h5>Prüfungsmaterial</h5>
          <p>Zum Modul Schreiben erha lten Sie das Aufgabenblatt mit den Aufgaben zu den Teilen 1 und 2 und
          die Antwortbögen dazu. Außerdem erha lten Sie gestempeltes Konzeptpapier. Auf diesem können Sie
          Notizen machen, bevor Sie Ihren Text schreiben.
          Im Training benutzen Sie die Antwortbögen auf Seite 156-157.</p>
          <p>In der Prüfung dürfen Sie keine Hilfsmittel wie Wörterbücher, Mobiltelefone usw. benutzen.</p>
          <p>Schreiben Sie mit Kugelschreiber, nicht mit Bleistift.</p>
          <Link to="/schreibenModule1">
            <div className="schreiben_module">
              <img
                className="schreiben_backImg"
                src="https://media.istockphoto.com/id/1284691550/de/vektor/blaue-abstrakte-geometrische-dynamische-form-papier-schichten-subtilen-hintergrundvektor.jpg?s=612x612&w=0&k=20&c=u3jENSNjf1hW7G4Q0Uxz05qCkul-IvVu63J9oVBk16A="
                alt="lesen img"
              />
              <div className="schreiben_title_wrapper">
                <h3 className="schreiben_module_title">Schreiben module 1</h3>
              </div>
            </div>
          </Link>
          <Link to="/schreibenModule2">
            <div className="schreiben_module">
              <img
                className="schreiben_backImg"
                src="https://media.istockphoto.com/id/1284691550/de/vektor/blaue-abstrakte-geometrische-dynamische-form-papier-schichten-subtilen-hintergrundvektor.jpg?s=612x612&w=0&k=20&c=u3jENSNjf1hW7G4Q0Uxz05qCkul-IvVu63J9oVBk16A="
                alt="lesen img"
              />
              <div className="schreiben_title_wrapper">
                <h3 className="schreiben_module_title">Schreiben module 2</h3>
              </div>
            </div>
          </Link>
          <Link to="/schreibenModule3">
            <div className="schreiben_module">
              <img
                className="schreiben_backImg"
                src="https://media.istockphoto.com/id/1284691550/de/vektor/blaue-abstrakte-geometrische-dynamische-form-papier-schichten-subtilen-hintergrundvektor.jpg?s=612x612&w=0&k=20&c=u3jENSNjf1hW7G4Q0Uxz05qCkul-IvVu63J9oVBk16A="
                alt="lesen img"
              />
              <div className="schreiben_title_wrapper">
                <h3 className="schreiben_module_title">Schreiben module 3</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Schreiben;
