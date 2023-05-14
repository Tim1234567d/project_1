import React from "react";
import { Link } from "react-router-dom";
import classes from "./Lesen.module.css"


const OneLesen = ({services}) => {      

    return (  
      
      <div  key={services.id}> 
      <Link to={`/module/${services.id}`} >  
      <div className={classes.service__card}>
       <img className= {classes.service_backImg} src={services.backImg} alt="service img"/> 
       <div className={classes.service_title_wrapper}>
          <h3 className={classes.service_title}>{services.title}</h3>
        </div>
         
        </div>
        </Link>

        </div>
       
         
  )
    
}
export default OneLesen;

