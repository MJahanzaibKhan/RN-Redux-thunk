import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import JsonApi from './src'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <JsonApi />
      </Provider>
    )
  }
}
export default App;
