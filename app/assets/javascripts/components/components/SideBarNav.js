import React, { Component, PropTypes } from 'react';
import  { Link } from 'react-router-dom';

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
          <li role="presentation" className="active"><Link to='/about-me'>About Me</Link></li>
          <li role="presentation"><a href="#">Portfolio</a></li>
          <li role="presentation"><a href="#">Blog</a></li>
        </ul>
      </div>

    );
  }
}


export default SideBarNav;
