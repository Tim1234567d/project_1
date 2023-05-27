import React from "react";
import { useParams } from "react-router-dom";
import classes from '../Lesen.module.css'
// import {Lesen_data} from "../../../data/data.js"
import {Lesen_data} from "../../../../data/data.js"
import SubLesenModule from "./SubLesenModule1";

const LesenModule1  = () => {

//   const {id} = useParams(); 

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