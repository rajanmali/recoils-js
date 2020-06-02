import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h3 className="nav__brand">
        <Link to="/">Recoil JS</Link>
      </h3>
      <ul className="nav__list">
        <li>
          <Link to="/character-counter">Character Counter</Link>
        </li>
        <li>
          <Link to="/to-do">To Do App</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
