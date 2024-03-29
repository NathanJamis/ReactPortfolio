import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h2 className="display-4 text-center">Nathan Walsh</h2>
        <p className="lead text-center">Full-Stack Web Developer</p>
        <p className="text-center">Bothell, WA</p>
        <a href="mailto:jamis.walsh@gmail.com" className="text-center" target="_blank" rel="noreferrer">
          <p className="text-center">jamis.walsh@gmail.com</p>
        </a>
        <ul className="nav justify-content-center nes-list is-disc">
          <li className="nav-item mx-2">
            <Link className="nav-link pr-3 pl-1" to="/">
              About
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link pr-3 pl-1" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link pr-3 pl-1" to="/skills">
              Skills
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Header;
