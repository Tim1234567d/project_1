import React from "react";
import { Link } from "react-router-dom";

const Sprechen = () => {
  return (
    <div className="wrapper">
      <section className="sprechen_section">
        <h2 className="sprechen_title">Sprechen</h2>
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
