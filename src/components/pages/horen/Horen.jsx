import React from "react";
import { Link } from "react-router-dom";

const Horen = () => {
  return (
    <div className="wrapper">
      <section className="horen_section">
        <h2 className="horen_title">Horen</h2>
        <div className="horen_modules">
        <h3>Hören: Hinweise</h3>
          <h5>In de Prüfung</h5>
          <p>
          • Im Modul Hören werden alle Hörtexte ohne Unterbrechung abgespielt.
            In jedem Teil bekommen Sie eine bestimmte Zeit, um die Aufgaben
            vorher durchzulesen und die Aufgaben zu lösen. Hier kommt es darauf
            an, dass Sie die Aufgaben schnell durchlesen und bearbeiten. Sonst
            versäumen Sie den weiteren Hörtext. <br />
            Also: nicht an einer schwierigen Textstelle oder Aufgabe hängen
            bleiben!
          </p>
          <br />
          <p>
          • Achten Sie auf die Angabe, wie oft Sie den Text hören können, also
            ein- oder zweimal.
          </p>
          <br />
          <p>
          • Sehen Sie sich bei jedem Prüfungsteil genau an, welche Aufgabe
            gestellt wird und welche Situation vorgegeben ist.
          </p>
          <br />

          <p>
          • Sie können effektiver arbeiten, wenn Sie beim Durchlesen der Aufgaben Notizen machen und Schlüsselwörter unterstreichen oder markieren.
          </p>
          <br />
          <p>
          • Wenn Sie im Hörtext ein Wort nicht verstehen, denken Sie nicht lange nach. Hören Sie einfach weiter - denn oft verstehen Sie das Wort, wenn Sie den ganzen Text hören.
          </p>
          <br />
          <p>• Wenn Sie bei einer Aufgabe nicht gleich die Lösung finden, markieren Sie auf dem Aufgabenblatt die Lösung, die Sie für die smnvollste halten, und gehen Sie zur nächsten Aufgabe. Schauen Sie sich die Aufgabe, bei der Sie sich unsicher sind, am Ende noch einmal an.</p>
          <br />
          <p>• Übertragen Sie Ihre Lösungen genau in den Antwortbogen! Wenn Sie etwas korrigieren wollen, füllen Sie das falsch angekreuzte Feld komplett aus und kreuzen Sie das richtige an.</p>
          <br />
          <p>• Schreiben Sie nicht mit Bleistift in.den Antwortbogen. Verwenden Sie einen Kugelschreiber.</p>
          <br />
          <h5>Vorbereitung auf die Prüfung</h5>
          <p>Wenn Sie sich auf die Prüfung vorbereiten, sollten Sie:</p>
          <p>• beim Lösen kein Wörterbuch oder andere Hilfsmittel benutzen,</p>
          <p>• sich an die unten genannten Zeitvorgaben halten und mit ihnen Erfahrungen sammeln,</p>
          <p>• am Ende des Moduls in fünf Minuten alle Lösungen schnell in den Antwortbogen übertragen,</p>
          <p>• beim Korrigieren Ihrer Ergebnisse auf Ihre typischen Fehler und Schwächen achten und gezielt üben, was Sie noch nicht so gut können.</p>
          <Link to="/horenModule1">
            <div className="horen_module">
              <img
                className="horen_backImg"
                src="https://media.istockphoto.com/id/1284691550/de/vektor/blaue-abstrakte-geometrische-dynamische-form-papier-schichten-subtilen-hintergrundvektor.jpg?s=612x612&w=0&k=20&c=u3jENSNjf1hW7G4Q0Uxz05qCkul-IvVu63J9oVBk16A="
                alt="lesen img"
              />
              <div className="horen_title_wrapper">
                <h3 className="horen_module_title">Horen module 1</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Horen;
