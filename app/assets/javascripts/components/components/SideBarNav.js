

import React, { Component, PropTypes } from 'react';



class SideBarNav extends Component {


  render() {
    return (
      <div className="side_bar_container">
        <div id="image_place" className="img-circle"></div>
        <ul className="nav nav-pills nav-stacked">
          <li role="presentation" class="active"><a href="#">About Me</a></li>
          <li role="presentation"><a href="#">Portfolio</a></li>
          <li role="presentation"><a href="#">Blog</a></li>
        </ul>
      </div>

    );
  }
}


export default SideBarNav;
