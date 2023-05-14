import React from "react";
import SocialList from "./SocialList";
import classes from "./Footer.module.css"

const Footer = () => {

return ( 
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>Logo</div>

        <SocialList/>

        <div className={classes.footer_cantacts}>
          <div>+996 709 91 95 82</div>
          <div>ул.Ak-cholmok 115/1</div>
          <div>deutsche@gmail.com</div>
        </div>
      </div>
    </footer>
)
}

export default Footer;