import React from "react";
import { Link } from "react-router-dom";

const Horen = () => {
  return (
    <div className="wrapper">
      <section className="horen_section">
        <h2 className="horen_title">Horen</h2>
        <div className="horen_modules">
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
