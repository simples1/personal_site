import React, { Component, PropTypes } from 'react';
import SideBar from "./SideBarNav"

class Homepage extends Component {
  render() {
    const { details, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3  box">
            IMAGE
           <SideBar />
          </div>

          <div className="col-md-9 box">
             content
          </div>

        </div>
      </div>

    );
  }
}


export default Homepage;
