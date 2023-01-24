import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/255/102/102">Red</NavLink>
            </li>
            <li>
              <NavLink to="/102/255/178">Green</NavLink>
            </li>
            <li>
              <NavLink to="/153/153/255">Blue</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
