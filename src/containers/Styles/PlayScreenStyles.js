import {StyleSheet, Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');
const squareSize = width < 448 ? width - 48 : 400;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#2C3A47'
  },

  coverContainer: {
    borderRadius: 24,
    height: squareSize,
    width: squareSize,
    overflow: 'hidden',
    marginVertical: 24
  },

  titleInfo: {
    alignItems: 'center'
  },

  episodeTitle: {
    fontSize: 24,
    color: '#F8EFBA'
  },

  podcastTitle: {
    fontSize: 16,
    color: '#FEA47F'
  },

  sliderContainer: {
    paddingHorizontal: 8,
    alignSelf: 'stretch'
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  }
});
