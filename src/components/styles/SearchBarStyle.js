import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors.js';
import Metrics from '../../config/Metrics.js';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Metrics.paddingHorizontal
  },
  searchContainer: {
    flex: 1,
    borderRadius: 25,
    paddingHorizontal: Metrics.paddingHorizontal,
    backgroundColor: Colors.snowLight
  },

  clearButtonStyle: {
    color: Colors.snow,
    paddingLeft: Metrics.paddingHorizontal/2
  },

  searchText: {
    color: Colors.snow
  }
});
