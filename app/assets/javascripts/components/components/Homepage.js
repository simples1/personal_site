import React, { Component, PropTypes } from 'react';
import SideBar from "./SideBarNav"

class Homepage extends Component {
  render() {
    const { details, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <p>
         {details} 
         <SideBar />
      </p>
    );
  }
}


export default Homepage;
