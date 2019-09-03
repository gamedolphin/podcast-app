import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './WelcomeScreen.js';

let RootStack = createStackNavigator({
  Welcome: WelcomeScreen,
}, {
  headerMode: 'none'
});

export default createAppContainer(RootStack);
