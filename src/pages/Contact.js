import React from "react";
import { Link } from 'react-router-dom'


var Contact = React.createClass({
    render: function() {
      return (
  
        <main className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>drop a note</h3>
            </div>
          </div>
          <div className="row">
            <div className=" col-md-12">
              <form>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" className="form-control" id="inputName" placeholder="Enter name" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email Address</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="example@gmail.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="MessageArea">Message</label>
                  <textarea className="form-control" id="MessageArea" rows={6} defaultValue={""} />
                </div>
                <a href="mailto:diesta.jeneth@gmail.com">Send Email</a>
              </form>
            </div>
          </div>
        </main>
      );
    }
  });


  
  export default Contact;