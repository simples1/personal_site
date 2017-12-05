import React, { Component, PropTypes } from 'react';
import  { NavLink } from 'react-router-dom';

class SideBarNav extends Component {
  render() {
    return (
      <div className="side_bar_container">
        <div id="image_place" className="img-circle"></div>
        <div className="intro">
          <p>
            Ruby on Rails Consultant. Helpful information on Rails development and strategy.
          </p>
        </div>
        <ul className="nav nav-pills nav-stacked">
          <li role="presentation">
            <NavLink activeClassName="active"  exact to='/'>About Me</NavLink>
          </li>
          <li role="presentation">
            <NavLink activeClassName="active" to='/blog'>Blog</NavLink>
          </li>
          <li role="presentation">
            <NavLink activeClassName="active" to='/projects'>Portfolio</NavLink>
          </li>
        </ul>
      </div>

    );
  }
}


export default SideBarNav;
