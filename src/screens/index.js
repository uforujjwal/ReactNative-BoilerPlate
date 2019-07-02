import {createStackNavigator, createAppContainer} from 'react-navigation';
// import OnBoardingScreen from './OnboardingScreen';
// import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
// import GettingStartedScreen from './GettingStartedScreen';


export const Screens = {
  Home: HomeScreen
};

export const Root = {
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
};