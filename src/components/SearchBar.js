import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles/SearchBarStyle.js';
import Colors from '../config/Colors.js';

const SearchBar = () => {

  const [activated, setActivated] = useState(false);
  const textRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          underlineColorAndroid='transparent'
          placeholder="Find your podcast..."
          placeholderTextColor={Colors.snowLight}
          style={styles.searchText}
          selectionColor={Colors.snow}
          caretHidden={true}
          onFocus={() => setActivated(true)}
          onBlur={() => setActivated(false)}
          ref={textRef}
        />
      </View>
      {activated ?
         (
           <View>
             <Button
               title="Clear"
               type="clear"
               titleStyle={styles.clearButtonStyle}
               onPress={() => {
                 setActivated(false);
                 textRef.current.clear();
                 textRef.current.blur();
               }}
             />
           </View>
         ) : null}
    </View>
  );

};

export default SearchBar;
