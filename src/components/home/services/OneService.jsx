import React from "react";
import { Link } from "react-router-dom";
import classes from "./Services.module.css"


const OneService = () => {      

    return (  
       
      <div className={classes.wrap} > 
      <Link to="/lesen">  
      <div className={classes.service__card}>
       <img className= {classes.service_backImg} src="https://static.wixstatic.com/media/e00276_bca2941d67fe4a5f82c9fc4f8e3e528e~mv2_d_4323_1769_s_2.jpg/v1/crop/x_0,y_167,w_4323,h_1602/fill/w_615,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_bca2941d67fe4a5f82c9fc4f8e3e528e~mv2_d_4323_1769_s_2.jpg" alt="service img"/> 
       <div className={classes.service_title_wrapper}>
          <h3 className={classes.service_title}>Lesen</h3>
        </div>
         
        </div>
        </Link> 
      <Link to="/horen" >  
      <div className={classes.service__card}>
       <img className= {classes.service_backImg} src="https://static.wixstatic.com/media/e00276_42760be85496478baf3318ffa1174490~mv2_d_8159_3102_s_4_2.jpg/v1/crop/x_0,y_33,w_8159,h_3035/fill/w_615,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_42760be85496478baf3318ffa1174490~mv2_d_8159_3102_s_4_2.jpg" alt="service img"/> 
       <div className={classes.service_title_wrapper}>
          <h3 className={classes.service_title}>Hören</h3>
        </div>
         
        </div>
        </Link> 
      <Link  to="/schreiben" >  
      <div className={classes.service__card}>
       <img className= {classes.service_backImg} src="https://static.wixstatic.com/media/e00276_b3e4e4fa3afc4af398037dc5c89ecb04~mv2_d_4393_1640_s_2.jpg/v1/fill/w_613,h_230,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_b3e4e4fa3afc4af398037dc5c89ecb04~mv2_d_4393_1640_s_2.jpg" alt="service img"/> 
       <div className={classes.service_title_wrapper}>
          <h3 className={classes.service_title}>Schreiben</h3>
        </div>
         
        </div>
        </Link> 
      <Link  to="/sprechen">  
      <div className={classes.service__card}>
       <img className= {classes.service_backImg} src="https://static.wixstatic.com/media/e00276_b7c4035ca85948108d6bba3c706ad8aa~mv2_d_5139_1919_s_2.jpg/v1/fill/w_615,h_230,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e00276_b7c4035ca85948108d6bba3c706ad8aa~mv2_d_5139_1919_s_2.jpg" alt="service img"/> 
       <div className={classes.service_title_wrapper}>
          <h3 className={classes.service_title}>Sprechen</h3>
        </div>
         
        </div>
        </Link> 

        </div>
         
  )
    
}

export default OneService;



