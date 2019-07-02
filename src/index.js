import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Screens, Root} from './screens';


const AppNavigator = createStackNavigator(Screens, Root);
const AppContainer = createAppContainer(AppNavigator);


export default class MainApp extends React.Component {
  render () {
    return <AppContainer />;
  }
}