import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-container">
            <li className="nav-brand">
              <h3>Math Magicians</h3>
            </li>
            <li className="nav-li">
              <ul>
                <li className="nav-links">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-links">
                  <Link to="/components/Calculator">Calculator</Link>
                </li>
                <li className="nav-links">
                  <Link to="/components/Quotes">Quotes</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
