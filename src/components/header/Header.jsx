import React from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import {FaTimes} from "react-icons/fa"




const Header = () => { 

  const [click, setClick] = useState(false);
  const [closeToggle, setCloseToggle] = useState(false)

  const handleClick = () => {
    setClick(!click);
    setCloseToggle(!click)
  } 

  const closeMobileMenu = () => {
    setClick(false);
    setCloseToggle(false)
  } 
  
  return ( 
    <header>
      <nav className="navbar">

        <Link to='/' className="navbar_logo" onClick={closeMobileMenu}>
          logo
        </Link>

        <div className="menu_icon" onClick={handleClick}>
          <i className={click ? "fa_times" : "fa_bars"}/>
        </div>
        <ul className={click ? "nav_menu_active" : "nav_menu"}>
          <li className="nav_item">
            <Link to='/' className="nav_links" onClick={closeMobileMenu}>
              Главная
            </Link> 
          </li>
         
          <li className="nav_item" >
            <Link
              to='/schedule'
              className="nav_links" 
              onClick={closeMobileMenu}>
              Рассписание
            </Link>
          </li>

          <li className="nav_item">
            <Link
              to='/exams'
              className="nav_links"
              onClick={closeMobileMenu}>
              Даты экзаменов
            </Link> 
          </li>
         
          <li className="nav_item">
            <a className="whatsapp_link" href="https://wa.me/996709919582">
              <i>
                <img src="https://www.svgrepo.com/show/176768/whatsapp-social-media.svg" className="whatsappIcon" alt="whatsappIcon" />
              </i> Связаться с нами
            </a>
          </li>

        </ul>

        <button className={closeToggle ? "nav_btn_active" : "nav_btn"}  onClick={closeMobileMenu}>
              <FaTimes/>
        </button>        
  
      </nav>
      </header>
  );
     
}

export default Header;