import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="splash-container">
        <div className="splash">
          <h1 className="splash-head">Jeneth Diesta</h1>
          <p className="splash-subhead">
            IT Project Manager, learning how to code
            </p>
          <p>
            <a href="./portfolio.html" className="pure-button pure-button-primary">Portfolio</a>
          </p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="content">
          <h2 className="content-head is-center">//Words to Live By//</h2>



          <div className="ribbon l-box-lrg pure-g">
            <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">

              <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                <h3 className="content-head content-head-ribbon">"Fail to Plan... Plan to Fail". -Ben Franklin</h3>

                <p>
                  Planning makes all the difference in the successful completion of projects. By spending time to
                  focus and plan, we rise to the occasion and deliver results.
                    </p>
              </div>
            </div>

            <br></br>

      <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
        <h4>Questions or Comments?</h4>
        <p>
          Connect with me on <a href="mailto:diesta.jeneth@gmail.com"> Email </a>
                <a href="https://www.linkedin.com/in/jeneth-diesta/" target="_blank">LinkedIn</a> or <a
                  href="https://github.com/jen6one9" target="_blank">GitHub</a>


              </p>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
