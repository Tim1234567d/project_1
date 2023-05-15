import React from "react";
import { Link } from "react-router-dom";
import classes from "../Lesen.module.css"
import {data2} from "./data.js"
import { useParams } from "react-router-dom";
import OneTeilen from "./OneTeilen";




const LesenTeilen = () => {      

  const {id} = useParams(); 
    return (  
       
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
       
        {data2.filter(services => services.id === id ).map((hey) => 
          <OneTeilen hey = {hey}/>
        )}
           
        </div>
        </div>
        </section>
       
        </div>
         
  )
    
}

export default LesenTeilen;



