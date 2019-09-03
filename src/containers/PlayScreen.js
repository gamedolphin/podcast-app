import React from 'react';
import { ActivityIndicator, View, Text, Image } from 'react-native';
import { Slider, Icon } from 'react-native-elements';

import styles from './Styles/PlayScreenStyles.js';

const PlayScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        <Image
          source={{ uri: 'https://lorempixel.com/720/720/' }}
          style={{ width: null, height: null, flex: 1, resizeMode: 'cover' }}
        />
      </View>
      <View style={styles.titleInfo}>
        <Text style={styles.episodeTitle}>The Great Heist</Text>
        <Text style={styles.podcastTitle}>Heist Everyday</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider/>
        <View style={styles.timeContainer}>
          <Text>00:10</Text>
          <Text>00:10</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Icon name="backward"
              type="font-awesome"
              reverse={false} color="#CAD3C8" reverseColor='#2C3A47' size={48}/>
        <Icon name="play-circle"
              type="font-awesome"
              color="#CAD3C8" reverseColor='#2C3A47' size={128}/>
        <Icon name="forward"
              type="font-awesome"
              reverse={false} color="#CAD3C8" reverseColor='#2C3A47' size={48}/>
      </View>
    </View>
  );
};

export default PlayScreen;
