import React from "react";
import "../App.css";
import Typed from 'react-typed';
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h2>Frontend Developer!</h2>
        <Typed 
          className="typed-text"
          strings={["Web development", "Web design"]}
          typeSpeed={30}
          backSpeed={50}
          loop
        />
        <Link className="btn-main" to="/contact">Contact me</Link>
      </div>
    </div>
  )
}

export default Header;
