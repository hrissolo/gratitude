import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


export const NavBar = props => {
    

  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          The Gratitude Houses
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/residents">
          Residents
        </Link>
      </li>
      
      
      <li className="navbar__item">
          Log out 
      </li>
      
    </ul>
  );
};
