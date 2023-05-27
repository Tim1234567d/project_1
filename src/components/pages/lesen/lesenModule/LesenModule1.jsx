import React from "react";
import classes from '../Lesen.module.css'
import {Lesen_data} from "../../../../data/data.js"
import SubLesenModule from "./SubLesenModule1";

const LesenModule1  = () => {


    return(
      <div>

     
       
          <div className="bigWrapper"> 
       <div className={classes.serviceDetail_wrapper}>
              
        <div className={classes.serviceDetail_container}>
         
         <SubLesenModule services= {Lesen_data}/>
           
        </div>  
      
  
          </div>
  
          </div>
      
    
       </div>
      

        )
}

export default LesenModule1;