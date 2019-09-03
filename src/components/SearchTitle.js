import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';

const SearchTitle = () => {

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 48 }}>Browse</Text>
      <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>Find a podcast that you would like</Text>
    </View>
  );
};

export default SearchTitle;
