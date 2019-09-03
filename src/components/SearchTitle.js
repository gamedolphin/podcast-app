import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/SearchTitleStyle.js';

const SearchTitle = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse</Text>
      <Text style={styles.subTitle}>Find a podcast that you would like</Text>
    </View>
  );
};

export default SearchTitle;
