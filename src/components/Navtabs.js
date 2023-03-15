import React from 'react';
import { NavLink } from 'react-router-dom';
function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/pollen_types"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Types of Pollen
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="AQI"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Air Quality Index
        </NavLink>
      </li>
    </ul>
  );
}
export default NavTabs;