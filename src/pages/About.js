import React from "react";
import 'materialize-css';
import { Navbar } from "react-materialize";
import { Link } from 'react-router-dom'

var About = React.createClass({
  render: function() {
    return (

      <div className="col s12 m7" id="content">
        <h3 className="header">hello there!</h3>
        <div className="card horizontal">
          <div className="card-image">
            <img src="./assets/profile pic.jpg" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p> I'm Jeneth, an IT project manager for a global financial institution with experience
                in managing offshore/onshore teams for multi-million dollar technology projects. My journey in
                tech began as a systems analyst associate, testing for both mainframe systems and online banking
                applications. I'm a Certified Scrum Master and looking to expand my skillset by
                becoming an IT Tech Lead within my dynamic team. I am firm believer in the power of
                collaboration, grit and teamwork to successfully execute projects. I also believe in the
                importance of peer recognition as an important building block in creating an excellent company culture. 
                Above all else, I've developed a customer first mindset.  I believe in earning and keeping the customer's trust. This means paying close attention
                to the details and ensuring the user has an excellent experience. 
              </p><p>Beyond the normal work day, I'm actively involved in NextGen Leaders, an employee resource group
                (ERG) which seeks to bring together diverse individuals across the generations to network,
                collaborate, and make meaningful connections.</p>
              <p />
            </div>
            <div className="card-action">
              <a href="https://www.linkedin.com/in/jeneth-diesta/" target="_blank">LinkedIn</a>
              <a href="https://github.com/jen6one9" target="_blank">GitHub</a>
              <a href="https://github.com/jen6one9/j-diesta-resume/blob/main/J.Diesta%20Resume%20.pdf" target="_blank">Resume</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
export default About;
