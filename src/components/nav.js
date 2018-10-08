import React from 'react';
import {NavLink, Switch} from 'react-router-dom';

const Nav = (props) => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li className="brand">AL</li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav;
