import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 // We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 // Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 35 + '%'}} src="https://img.freepik.com/free-vector/paper-style-smooth-background_52683-64312.jpg"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               Create Record
             </NavLink>
             <NavLink className="nav-link" to="/register">
               Register
             </NavLink>
             <NavLink className="nav-link" to="/login">
               Login
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}