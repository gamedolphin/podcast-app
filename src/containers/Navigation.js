import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './WelcomeScreen.js';
import PlayScreen from './PlayScreen.js';

let RootStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Play: PlayScreen
}, {
  headerMode: 'none',
  initialRouteName: 'Play'
});

export default createAppContainer(RootStack);
