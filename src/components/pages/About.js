import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const About = () => {
  return (
    <div class="container-fluid about" id="about">
    <img src="../../images/mypic.JPG" alt="My picture"/>
    <div className="jumbotron bg-dark text-white">
      <h1 className="display-4">Front-End Developer.</h1>
      <p className="lead">Hello, world!</p>
      <hr className="my-4"/>
      <p>
        I'm Ahmed, a Front-End 
        Web Developer based in London United Kingdom. I love combining 
        the worlds of logic and creative design to make eye-catching, 
        accessible, and user- friendly websites and applications.
      </p>
      <button type="button" class="btn btn-danger">Download My CV.</button>
    </div>
    </div>
  )
}

export default About;
