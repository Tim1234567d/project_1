import React from "react";
import { Link } from "react-router-dom";

const Schreiben = () => {
  return (
    <div className="wrapper">
      <section className="schreiben_section">
        <h2 className="schreiben_title">Schreiben</h2>
        <div className="schreiben_modules">
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
        </div>
      </section>
    </div>
  );
};

export default Schreiben;
