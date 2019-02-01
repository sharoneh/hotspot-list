import React, { Component } from 'react';
import '../styles/App.scss';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    );
  }
}

export default App;
