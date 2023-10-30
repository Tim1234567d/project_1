import React from "react";
import { Link } from "react-router-dom";

const Sprechen = () => {
  return (
    <div className="wrapper">
      <section className="sprechen_section">
        <h2 className="sprechen_title">Sprechen</h2>
        <h3>Sprechen: Übersicht</h3>
        <p>Die mündliche Prüfung wird als Paarprüfung, d. h. mit zwei Prüfungsteilnehmerinnen/-teilnehmern,
        durchgeführt. Diese sprechen mit zwei Prüfenden. Wenn nur eine Person zu prüfen ist, kommt es zu
        einer Einzelprüfung. Dann übernimmt eine/r der Prüfenden die Rolle der Gesprächspartnerin des
        Gesprächspartners. Vor der Prüfung stellt eine/r der Prüfenden einige Fragen zu Ihrer Person, um Sie
        kennenzulernen (Name, Wohnort, evtl. wie lange Sie schon in Deutschland sind). Diese„Begrüßungsphase"
        wird nicht bewertet.</p>
        <p>Die mündliche Prüfung hat zwei Teile.</p>

        <h5>Teil 1: Einen kurzen Vortr g halt n</h5>
        <p>Sie und Ihre Gesprächspartnerin / Ihr Gesprächspartner (Teilnehmerin/Teilnehmer A und B) bekommen
        zwei unterschiedliche Aufgabenblätter mit zwei Themen, aus denen Sie jeweils ein Thema auswählen.
        Sie sollen einen kurzen Vortrag über Ihr Thema halten. Ihre Gesprächspartnerin / Ihr Gesprächspartner
        stellt Ihnen anschließend eine Frage.</p>
        <p>Zeit: ca. 4 Minuten pro Teilnehmerin/Teilnehmer</p>
        <h5>teil 2: Diskssion über ein Thema/ eine Fragestellung führen</h5>
        <p>Teilnehmerin/Teilnehmer A und B erha lten das gleiche Aufgaber.i blatt mit einer aktuellen Fragestellung.
        Sie sollen mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner über dieses Thema diskutieren.</p>
        <p>Zeit: ca. 5 Minuten für beide Teilnehmerinnen/Teilnehmer zusammen</p>

        <h3>Vorbereitungszeit</h3>
        <p>Sie haben 15 Minuten Zeit, sich auf die mündliche Prüfung vorzubereiten. Sie bereiten sich alleine
        vor. Sie dürfen sich dabei Notizen machen.</p>
        <p>Bei Teil 1 wählen Sie aus zwei Themen ein Thema aus. Wenn die Vorbereitungszeit vorbei ist, ruft man
        Sie und Ihre Gesprächspartnerin / Ihren Gesprächspartner in den Prüfungsraum. In dem Raum sind
        zwei Prüfende. Eine/r der Prüfenden wird Sie begrüßen und die Kollegin / den Ko llegen vorstellen.</p>
        <div className="sprechen_modules">
          <Link to="/sprechenModule1">
            <div className="sprechen_module">
              <img
                className="sprechen_backImg"
                src="https://media.istockphoto.com/id/1284691550/de/vektor/blaue-abstrakte-geometrische-dynamische-form-papier-schichten-subtilen-hintergrundvektor.jpg?s=612x612&w=0&k=20&c=u3jENSNjf1hW7G4Q0Uxz05qCkul-IvVu63J9oVBk16A="
                alt="lesen img"
              />
              <div className="sprechen_title_wrapper">
                <h3 className="sprechen_module_title">Sprechen module 1</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sprechen;
