import React from "react";
import classes from "./Lesen.module.css"
// import {Lesen_data} from "../../../data/data.js"
import {data2} from "./Teilen/data.js"
import OneLesen from "./OneLesen";

const Lesen = () => {
    return (
      <div className="bigWrapper">
        <section className={classes.services}>
        <div className={classes.wrapper}>
          <h2 className={classes.services_title}>Lesen</h2>
         
          <div className={classes.service__cards}> 
  
  
            {data2.map( (services) => 
          <OneLesen services = {services} />
  
            )} 
          </div>
        </div>
        </section>
        </div>
     
      )
}

export default Lesen;