import React, { Component, PropTypes } from 'react';

class Homepage extends Component {
  render() {
    const { details, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <p>
         {details} 
      </p>
    );
  }
}


export default Homepage;
