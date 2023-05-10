import React from "react";
import  classes from "./MainImg.module.css"
 
const MainImg = () => {
 
    return (
        <> 
    <div  className={classes.mainImg}> 
    <div className={classes.mainImg_shadow}>
        <div className={classes.wrapper}>
            <h1 className={classes.title}>КУРСЫ НЕМЕЦКОГО ЯЗЫКА УРОВНЯ B1, B2</h1>
            <p className={classes.subtitle}>Вы остановились на уроке "B12. Lesen часть №3"</p> 
            <div className={classes.num_wrapper}> 
                    <a  className={classes.number_1} href="tel:+996709919582"> 
                        <i>
                            {/* <img src="https://pngset.com/images/background-white-phone-icon-clipart-call-icon-white-texture-white-board-clothing-apparel-transparent-png-767470.png" className={classes.phone_icon} alt="phone icon" /> */}
                        </i> Перейти к уроку
                    </a>
                    {/* <a className={classes.number_2} href="https://api.whatsapp.com/send?phone=+996709919582"> 
                         <i>
                           <img src="https://www.svgrepo.com/show/176768/whatsapp-social-media.svg" className={classes.whatsapp_icon} alt="whatss'app icon" />
                        </i> 0709 91 95 82 
                    </a> */}
            </div>   

        </div> 
        </div>
    </div>
        </>
    )
}
export default MainImg;