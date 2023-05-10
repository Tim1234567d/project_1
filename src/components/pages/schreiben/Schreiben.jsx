import React from "react";
import classes from "./Schreiben.module.css"
import {Services_data} from "./data.js"
import OneSchreiben from "./OneSchreiben";

const Schreiben = () => {
    return (
      <div className="bigWrapper">
        <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>Schreiben</h2>
         
          <div className={classes.service__cards}> 
  
  
            {Services_data.map( (services) => 
          <OneSchreiben services = {services} />
  
            )} 
          </div>
        </div>
        </section>
        </div>
      
     
      )
}

export default Schreiben;