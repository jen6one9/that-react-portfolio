import React from "react";
import 'materialize-css';
import { Button, Card, Row, Col, } from 'react-materialize';
//import all of your images 
import sleep from './public/sleep.jpg';
import team from './public/team.jpg';
import keyboard from './public/keyboard.jpg';
import nerd from './public/nerd.jpg';
import iphone from './public/iphone.jpg';
import fire from './public/fire.jpg';
import { Link, useLocation } from "react-router-dom";

//save the paths in a json file and import them in one go


var Portfolio = React.createClass({
  render: function () {
    return (

      <div className="container">
        <h3>my work in progress</h3>
        <div className="row">
          <div className="col s6">
            <a href="https://project-hypnos.herokuapp.com/" target="_blank">
            </a><div className="card-panel hoverable"><a href="https://project-hypnos.herokuapp.com/" target="_blank">Project Hypnos
                <img src="./public/sleep.jpg" className="responsive-img" height={300} width={455} alt="Responsive image" />
            </a>
              <p> <a href="https://github.com/KILowrey/hypnos" target="_blank">Git Repo</a></p>
              <p>Sleep App to help gain a better night's rest</p>
            </div>
          </div>
          <div className="col s6">
            <a href="https://jen6one9.github.io/that-password-generator/" target="_blank">
            </a><div className="card-panel hoverable"><a href="https://jen6one9.github.io/that-password-generator/" target="_blank"> Random Password Generator
                <img src="./public/keyboard.jpg" className="responsive-img" height={300} width={455} alt="Responsive image" />
            </a>
              <p> <a href="https://github.com/jen6one9/that-password-generator" target="_blank">Git Repo</a></p>
              <p>App generates a password based on user selected criteria </p>
            </div>
          </div>
          <div className="col s6">
            <a href="https://jen6one9.github.io/that-team-profile-generator/" target="_blank">
            </a><div className="card-panel hoverable"><a href="https://jen6one9.github.io/that-team-profile-generator/" target="_blank"> Team Profile Generator
                <img src="./public/team.jpg" className="responsive-img" height={300} width={455} alt="Responsive image" />
            </a>
              <p> <a href="https://github.com/jen6one9/that-team-profile-generator" target="_blank">Git Repo</a></p>
              <p>Web app that displays a team's basic info for quick access to their emails and GitHub profiles </p>
            </div>
          </div>
          <div className="col s6">
            <a href="https://drive.google.com/file/d/1_xUb0MZ_cAgjMrP5Y49RvdLIMPCJ-cpW/view?usp=sharing/" target="_blank">
            </a><div className="card-panel hoverable"><a href="https://drive.google.com/file/d/1_xUb0MZ_cAgjMrP5Y49RvdLIMPCJ-cpW/view?usp=sharing/" target="_blank"> ReadMe Generator
                <img src="./public/nerd.jpg" className="responsive-img" height={300} width={455} alt="Responsive image" />
            </a>
              <p> <a href="https://github.com/jen6one9/that-readme-generator" target="_blank">Git Repo</a>
              </p>
              <p>command line app that allows input using the inquirer package to dynamically generate a README.md file </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <a href="https://jen6one9.github.io/that-weather-dashboard/" target="_blank">
              {/*target="blank" allows the user to see this url in a new tab*/}
            </a><div className="card-panel hoverable"><a href="https://jen6one9.github.io/that-weather-dashboard/" target="_blank"> Weather Dashboard
                <img src="./public/iphone.jpg" className="responsive-img" height={300} width={455} alt="Responsive image" />
            </a>
              <p> <a href="https://github.com/jen6one9/that-weather-dashboard" target="_blank">Git Repo
                </a></p>
              <p> Simple weather app that leverages the OpenWeather API</p>
            </div>
          </div>
          <div className="col s6">
            <a href="https://clydebaron2000.github.io/Covid-Danger-Data/" target="_blank">
            </a><div className="card-panel hoverable"><a href="https://clydebaron2000.github.io/Covid-Danger-Data/" target="_blank"> Covid Danger Data
                {/*hover features allows the user to see card is a clickable link*/}
              <img src="./public/fire.jpg" className="responsive-img" height={300} width={455} alt="Responsive image" />
            </a>
              <p> <a href="https://github.com/clydebaron2000/Covid-Danger-Data/tree/jeneth-branch" target="_blank">Git
                  Repo</a></p>
              <p> App that delivers CA wildfire info in the midst of Covid-19</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Portfolio;
