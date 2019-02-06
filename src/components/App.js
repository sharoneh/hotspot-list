import React, { Component } from 'react';
import '../styles/App.scss';
import '../styles/index.scss';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Page from './Page';

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
