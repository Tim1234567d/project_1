import React from "react";
// import { Link } from "react-router-dom";
import classes from "../Lesen.module.css"
// import {data2} from "./data.js"
import { useParams } from "react-router-dom";
// import OneTeilen from "./OneTeilen";
import {Lesen_data} from "../Teilen/data.js"




const LesenTeilen = () => {      

  const {id} = useParams(); 
    return (  
       
      <div className="bigWrapper"> 
      
        <section className={classes.services}>
        
        <div className={classes.wrapper}> 
        
        <div className={classes.service__cards}> 
       
        {Lesen_data.filter(services => services.id === id ).map((hey) => 

        <div>
          <p>{hey.title1}</p>
          {hey.title}
          
           </div>
          
        
          // <OneTeilen hey = {hey}/>  
        
        )}
           
        </div>
        </div>
        </section>
       
        </div>
         
  )
    
}

export default LesenTeilen;



