import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import MyApp from './MyApp';
import configureStore from '../store/configureStore';
import {setDetails} from '../actions/my_actions'


const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(setDetails(this.props.details));
  }
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>

    );
  }
}
