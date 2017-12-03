import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import SideBar from "./SideBarNav"
import Aboutme from "./AboutMe"

const Home = (props) => {
  console.log(props.match.params.id)
  return <h1>yoyoyo</h1>
}


class Homepage extends Component {
  render() {
    const { details, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <BrowserRouter>

        <div className="container">
          <div className="row">
            <div className="col-md-3 side_bar_wrapper full-height box">

             <SideBar />
            </div>
            <div className="col-md-9 side_bar_wrapper box">
              <Route exact path='/' component={Home} />
              <Route path='/about-me' component={Aboutme} />
            </div>
          </div>
        </div>
      </BrowserRouter>


    );
  }
}


export default Homepage;

