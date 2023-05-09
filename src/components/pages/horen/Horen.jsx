import React from "react";
import classes from "./Horen.module.css"
import {Services_data} from "./data.js"
import OneHoren from "./OneHoren";

const Horen = () => {
    return (
        <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>Horen</h2>
         
          <div className={classes.service__cards}> 
  
  
            {Services_data.map( (services) => 
          <OneHoren services = {services} />
  
            )} 
          </div>
        </div>
        </section>
     
      )
}

export default Horen;