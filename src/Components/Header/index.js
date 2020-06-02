import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="brand__container">
        <h3 className="nav__brand">Recoil JS</h3>
        <h3 className="nav__brand-alt">
          Find me at:{" "}
          <a
            href="https://twitter.com/notrajanmali"
            target="_blank"
            rel="noopener noreferrer"
          >
            @notrajanmali
          </a>
        </h3>
      </div>
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
