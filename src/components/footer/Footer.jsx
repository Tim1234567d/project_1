import React from "react";
import SocialList from "./SocialList";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="logo">Logo</div>

        <SocialList />

        <div className="footer_cantacts">
          <div>+996 709 91 95 82</div>
          <div>ул.Ak-cholmok 115/1</div>
          <div>deutsche@gmail.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
