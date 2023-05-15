import React from "react";
import { Link } from "react-router-dom";
import classes from "../Lesen.module.css"
// import {Services_data} from "./data.js"
// import { useParams } from "react-router-dom";



const OneTeilen = ({hey}) => {      

  // const {id} = useParams(); 
    return (  
       
      <div className={classes.service__cards}> 
      {hey.data.map((word) => 
        <Link to={`/module/${word.id}`} >  
          <div className={classes.service__card}>
           <img className= {classes.service_backImg} src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg" alt="service img"/> 
           <div className={classes.service_title_wrapper}>
              <h3 className={classes.service_title}>{word.title}</h3>
            </div>
             
            </div>
            </Link> 
        )}
       
        
          
        
           
        </div>

       
         
  )
    
}

export default OneTeilen;



