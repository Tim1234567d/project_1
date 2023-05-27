import React from "react";
import { useParams } from "react-router-dom";
import classes from '../Lesen.module.css'
// import {Lesen_data} from "../../../data/data.js"
import { Link } from "react-router-dom";
import { Lesen_data } from "../../../../data/data.js";

const SubLesenModule  = ({services}) => {

  const {id} = useParams(); 

    return(
        <div className="bigWrapper"> 
      
        <section className={classes.services}>
        
        <div className={classes.wrapper}> 
        <div>
            
            <p>
            Für das Modul Lesen haben Sie insgesamt 65 Minuten Zeit. Die Zeitangaben
            zu den einzelnen Tei len sind nicht festgelegt, sondern dienen nur zur Orientierung. Sie können also einen Teil schneller bearbeiten und haben dann
            mehr Zeit für die anderen Teile. Beachten Sie jedoch, dass Sie innerhalb der
            65 Minuten alle Lösungen in den Antwortbogen übertragen müssen. 
            </p>
    
            <p>Sie können im Modul Lesen insgesamt 30 Punkte erreichen, die in 100 Ergebnispunkte umgerechnet
                werden (siehe Seite 7). Zum Bestehen dieses Moduls müssen Sie mindestens 18 Aufgaben (60 Prozent)
                richtig lösen. 
            </p>
    
            <p>Zum Modul Lesen erhalten Sie die Aufgabenblätter mit den Texten und den Aufgaben sowie den Antwortbogen. Auf Wunsch erhalten Sie auch gestempeltes Papier für Notizen.
                In der Prüfung dürfen Sie keine Hilfsmittel wie Wörterbücher, Mobiltelefone usw. benutzen. 
            </p>
    
            </div>
        <div className={classes.service__cards}> 

        {Lesen_data.map((word) => 

  <Link to={`/lesenModule1/${word.id}`} > 

     <div className={classes.service__card}>
      <img className= {classes.service_backImg} src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg" alt="service img"/> 
      <div className={classes.service_title_wrapper}>
         <h3 className={classes.service_title}>{word.title}</h3>
      </div>
        
       </div> 

      {/* <Teil word = {word}/> */}

       </Link> 
  )}
       
        {/* {data2.filter(services => services.id === id ).map((hey) => 

        // {
        //   hey.data.map((word) => 
        //   <div className={classes.service__card}>
        //   <img className= {classes.service_backImg} src="https://funart.pro/uploads/posts/2022-08/thumbs/1660179943_53-funart-pro-p-sinii-fon-sport-krasivo-58.jpg" alt="service img"/> 
        //   <div className={classes.service_title_wrapper}>
        //      <h3 className={classes.service_title}>{word.title}</h3>
        //    </div>
            
        //    </div>
        //   )
        // }
        //   <OneTeilen hey = {hey}/>  
        
        )} */}
           
        </div>
        </div>
        </section>
       
        </div>
         

        )
}

export default SubLesenModule;
