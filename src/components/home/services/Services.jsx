import React from "react"
import OneService from "./OneService";
import classes from "./Services.module.css"
 
const Services = () => {

return (
      <section className={classes.services}>
      <div className={classes.wrapper}>
        <h2 className={classes.services_title}>МОДУЛИ</h2>
       
        <div className={classes.service__cards}> 
          <OneService/>
        </div>
      </div>
      </section>
   
    )

}

export default Services;