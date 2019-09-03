import React from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from './Navigation.js';
import styles from './Styles/RootContainerStyles.js';

const RootContainer = () => {

  return (
    <View style={styles.applicationView}>
      <StatusBar barStyle='light-content' />
      <Navigation />
    </View>
  );
};

export default RootContainer;
