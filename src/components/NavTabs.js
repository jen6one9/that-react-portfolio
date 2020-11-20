import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'materialize-css';
import { Navbar } from "react-materialize";


function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  
  return ( <nav>
    <div className="nav-wrapper">
        <a href="index.html" className="brand-logo">jeneth diesta</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="./jeneth.html">About Me</a></li>
            <li><a href="./portfolio.html">Portfolio</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
    </div>
</nav>

// return(<Navbar
  
//   alignLinks="right"
//   brand={<a className="brand-logo" href="#">Logo</a>}
//   id="mobile-nav"
//   menuIcon={<Icon>menu</Icon>}
//   options={{
//     draggable: true,
//     edge: 'left',
//     inDuration: 250,
//     onCloseEnd: null,
//     onCloseStart: null,
//     onOpenEnd: null,
//     onOpenStart: null,
//     outDuration: 200,
//     preventScrolling: true
//   }}
// >
//   <NavItem href="">
//     Getting started
//   </NavItem>
//   <NavItem href="components.html">
//     Components
//   </NavItem>
// </Navbar>

  );
}

export default NavTabs;
