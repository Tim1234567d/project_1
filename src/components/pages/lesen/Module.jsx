import React from "react";
import { useParams } from "react-router-dom";
import classes from './Lesen.module.css'
// import {Lesen_data} from "../../../data/data.js"
import {data2} from "./Teilen/data.js"
import SubModule from "./SubModule";

const Module  = ({hey}) => {

  const {id} = useParams(); 

    return(
      <div>

      {data2.map ((services) => 
       
          <div className="bigWrapper"> 
       <div className={classes.serviceDetail_wrapper}>
              
        <div className={classes.serviceDetail_container}>
         
         <SubModule services= {services}/>
           
        </div>  
      
  
          </div>
  
          </div>
      )
      }  
    
       </div>
      

        )
}

export default Module;