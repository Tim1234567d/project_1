import React from "react";
import classes from "./Footer.module.css";

const SocialList = () => {
  return (
    <ul className={classes.list_icons}>
      <li>
        <a href="https://api.whatsapp.com/send?phone=+996709919582">
          <img src="./img/svg/Mask whatsapp.svg" alt="whatsapp" />
        </a>
      </li>
      <li>
        <a href="https://api.whatsapp.com/send?phone=+996709919582">
          <img src="./img/svg/Mask instagram.svg" alt="whatsapp" />
        </a>
      </li>
      <li>
        <a href="https://api.whatsapp.com/send?phone=+996709919582">
          <img src="./img/svg/Mask facebook.svg" alt="whatsapp" />
        </a>
      </li>
      <li>
        <a href="https://api.whatsapp.com/send?phone=+996709919582">
          <img src="./img/svg/Mask telegram.svg" alt="whatsapp" />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
