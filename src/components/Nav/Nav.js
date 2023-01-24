import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <h1>Test</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/255/0/0">Red</NavLink>
          </li>
          <li>
            <NavLink to="/102/255/178">Green</NavLink>
          </li>
          <li>
            <NavLink to="/51/51/255">Blue</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
