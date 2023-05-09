import React from "react";
import classes from "./Sprechen.module.css"
import {Services_data} from "./data.js"
import OneSprechen from "./OneSprechen";

const Sprechen = () => {
    return (
        <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>Sprechen</h2>
         
          <div className={classes.service__cards}> 
  
  
            {Services_data.map( (services) => 
          <OneSprechen services = {services} />
  
            )} 
          </div>
        </div>
        </section>
     
      )
}

export default Sprechen;