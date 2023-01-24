import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <h1>Test</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Red</NavLink>
          </li>
          <li>
            <NavLink to="/">Green</NavLink>
          </li>
          <li>
            <NavLink to="/">Blue</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
