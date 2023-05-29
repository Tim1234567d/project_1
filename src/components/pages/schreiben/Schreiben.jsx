import React from "react";
import { Link } from "react-router-dom";

const Schreiben = () => {
  return (
    <div className="bigWrapper">
      <section className="services">
        <div className="wrapper">
          <h2 className="services_title">Schreiben</h2>

          <div className="service__cards">
            <Link to="/schreibenModule1">
              <div className="service__card">
                <img
                  className="service_backImg"
                  src="https://media.istockphoto.com/id/1284691550/de/vektor/blaue-abstrakte-geometrische-dynamische-form-papier-schichten-subtilen-hintergrundvektor.jpg?s=612x612&w=0&k=20&c=u3jENSNjf1hW7G4Q0Uxz05qCkul-IvVu63J9oVBk16A="
                  alt="service img"
                />
                <div className="service_title_wrapper">
                  <h3 className="service_title">Schreiben module 1</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schreiben;
