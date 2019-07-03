import React, {Component} from 'react';
import MainApp from './src/index';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import util from './src/utils/util';
import {setConfig} from './src/redux/actions/config';
import {Dimensions} from 'react-native';

store.dispatch(setConfig(util.getDevice()));

export default class App extends Component{
  componentDidMount () {
    Dimensions.addEventListener('change', (e) => {
      store.dispatch(setConfig(util.getDevice()));
    });
  }
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}


