import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import "../../App.css";

const Home = () => {
  return (
      <div className="header-wrapper">
        <div className="main-info">
          <h2>Frontend Developer!</h2>
          <Typed
            className="typed-text"
            strings={["Hello, There  ", "I am Ahmed", "a Frontend developer!"]}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
          <Link className="btn-main" to="/contact">
            Contact me
          </Link>
        </div>
      </div>
  );
};

export default Home;
