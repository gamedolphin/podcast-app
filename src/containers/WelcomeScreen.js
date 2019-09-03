import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar.js';
import SearchTitle from '../components/SearchTitle.js';

import styles from './Styles/WelcomeScreenStyles.js';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar/>
    </View>
  );
};


export default WelcomeScreen;
