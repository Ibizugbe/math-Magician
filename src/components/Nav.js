import React from 'react';
import { Link } from 'react-router-dom';

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
              <ul className="nav-ul">
                <li>
                  <Link to="/" className="nav-links">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/components/Calculator" className="nav-links">
                    Calculator
                  </Link>
                </li>
                <li className="nav-links">
                  <Link to="/components/Quotes" className="nav-links">
                    Quotes
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
