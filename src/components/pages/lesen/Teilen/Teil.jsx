import React from "react";
import classes from "../Lesen.module.css"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Teil = ({word}) => {

    const {id} = useParams();

    return(
        <Link to={`/lesenteilen/${id}/${word.id}`} > 
        <div className={classes.service__card}>
        <img className= {classes.service_backImg} src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg" alt="service img"/> 
        <div className={classes.service_title_wrapper}>
           <h3 className={classes.service_title}>{word.title}</h3>
         </div>
          
         </div>
          </Link>
    )
}

export default Teil;