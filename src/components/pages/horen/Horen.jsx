import React from "react";
import classes from "./Horen.module.css"
import {Horen_data} from "../../../data/data.js"
import OneHoren from "./OneHoren";

const Horen = () => {
    return (
      <div className="bigWrapper">
        <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>Horen</h2>
         
          <div className={classes.service__cards}> 
  
  
            {Horen_data.map( (services) => 
          <OneHoren services = {services} />
  
            )} 
          </div>
        </div>
        </section>
        </div>
     
      )
}

export default Horen;