import React, { Component, PropTypes } from 'react';
import SideBar from "./SideBarNav"

class Homepage extends Component {
  render() {
    const { details, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 side_bar_wrapper full-height box">

           <SideBar />
          </div>

          <div className="col-md-9 side_bar_wrapper box">
             content
          </div>

        </div>
      </div>

    );
  }
}


export default Homepage;
