import React from "react";
import classes from "./Lesen.module.css"
import {Services_data} from "./data.js"
import OneLesen from "./OneLesen";

const Lesen = () => {
    return (
      <div className="bigWrapper">
        <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>Lesen</h2>
         
          <div className={classes.service__cards}> 
  
  
            {Services_data.map( (services) => 
          <OneLesen services = {services} />
  
            )} 
          </div>
        </div>
        </section>
        </div>
     
      )
}

export default Lesen;