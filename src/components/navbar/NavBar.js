import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


export const NavBar = props => {
    

  return (
    <ul className="navbar">
      <li className="navbar__item ">
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
        <Link className="navbar__link" to="/alumni">
          Alumni
        </Link>
      </li>
      
      <li className="navbar__item">
        <Link className="navbar__link" to="/applicants">
          Applicants
        </Link>
      </li>

      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          Log out 
          </Link>
      </li>
      
    </ul>
  );
};
