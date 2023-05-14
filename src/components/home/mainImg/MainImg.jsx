import React from "react";
import  classes from "./MainImg.module.css"
 
const MainImg = () => {
 
    return (
        <> 
        <div className={classes.mainImg_shadow}>
        <div className={classes.wrapper}>
            <h1 className={classes.title}>КУРСЫ НЕМЕЦКОГО ЯЗЫКА УРОВНЯ B1, B2</h1>
            <p className={classes.subtitle}>Вы остановились на уроке "B12. Lesen часть №3"</p> 
            <div className={classes.num_wrapper}> 
                    <a  className={classes.phone_icon} href="tel:+996709919582"> 
                        <i>
                        </i> Перейти к уроку
                    </a>
                 
            </div>   

        </div> 
        </div>
        </>
    )
}
export default MainImg;