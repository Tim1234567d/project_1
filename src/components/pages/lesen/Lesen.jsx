import React from "react";
import { Link } from "react-router-dom";

const Lesen = () => {
  return (
    <div className="wrapper">
      <section className="lesen_section">
        <h2 className="lesen_title">Lesen</h2>
        <div className="lesen_modules">
          <Link to="/lesenModule1">
            <div className="lesen_module">  
              <img
                className="lesen_backImg"
                src="https://media.istockphoto.com/id/1284691550/de/vektor/blaue-abstrakte-geometrische-dynamische-form-papier-schichten-subtilen-hintergrundvektor.jpg?s=612x612&w=0&k=20&c=u3jENSNjf1hW7G4Q0Uxz05qCkul-IvVu63J9oVBk16A="
                alt="lesen img"
              />
              <div className="lesen_title_wrapper">
                <h3 className="lesen_module_title">lesen module 1</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}; 

export default Lesen;
